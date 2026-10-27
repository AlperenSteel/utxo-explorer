#!/usr/bin/env python3
"""Bir Bitcoin adresinin UTXO listesini public Esplora API'sinden çekip JSON dosyasına yazar.

mempool.space kullanır, erişilemezse blockstream.info'yu dener. UTXO'lar coin selection
için miktara göre büyükten küçüğe sıralanır. Sadece standart kütüphane kullanır.

Kullanım:
    python3 utxo_list.py <adres> [mainnet|testnet|signet] [-o cikti.json]
    python3 utxo_list.py --json kayitli_cevap.json [-o cikti.json]   # çevrimdışı test

Çıktı dosyası verilmezse: utxos_<adres>_<tarih>.json

Not: Sağlayıcı sorduğun adresi ve IP'ni görür. Öğrenirken herkese açık örnek
adresler ya da signet/testnet kullan.
"""

from __future__ import annotations  # Python 3.9 ve öncesi için: "dict | None" gibi tip ipuçları

import json
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from decimal import Decimal

PROVIDERS = {
    "mainnet": ["https://mempool.space/api", "https://blockstream.info/api"],
    "testnet": ["https://mempool.space/testnet/api", "https://blockstream.info/testnet/api"],
    "signet": ["https://mempool.space/signet/api"],
}


def _get_json(url: str):
    req = urllib.request.Request(url, headers={"Accept": "application/json",
                                               "User-Agent": "utxo-list/1.1"})
    with urllib.request.urlopen(req, timeout=20) as res:
        return json.load(res)


def fetch(address: str, network: str) -> tuple[list[dict], dict | None, str]:
    """(utxo listesi, adres istatistikleri, kullanılan sağlayıcı) döndürür."""
    if network not in PROVIDERS:
        raise ValueError(f"Bilinmeyen ağ: {network} (mainnet|testnet|signet)")

    last_error = None
    for base in PROVIDERS[network]:
        url = f"{base}/address/{address}/utxo"
        try:
            utxos = _get_json(url)
        except urllib.error.HTTPError as e:
            # 400: geçersiz adres; büyük adreslerde sağlayıcı limit hatası da metin döner
            detail = e.read().decode(errors="replace").strip()
            last_error = RuntimeError(f"{url} → HTTP {e.code}: {detail}")
            if e.code == 400:
                break  # adres hatalıysa diğer sağlayıcıyı denemenin anlamı yok
            continue
        except (urllib.error.URLError, TimeoutError) as e:
            last_error = RuntimeError(f"{url} erişilemedi: {e}")
            continue

        # Adres istatistikleri (işlem sayısı, toplam alınan/harcanan) — olmazsa başlıkta null kalır
        try:
            stats = _get_json(f"{base}/address/{address}")
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError):
            stats = None
        return utxos, stats, base
    raise last_error


def btc(sat: int) -> str:
    """Satoshi (int) → 8 haneli BTC metni. float kullanılmaz, JSON'a metin olarak yazılır."""
    return f"{Decimal(sat) / Decimal(100_000_000):.8f}"


def address_type(address: str) -> str:
    """Adresin ön ekinden kilit türü tahmini (bkz. Oturum 2 §14a: ön ek türü her zaman tam söylemez)."""
    a = address.lower()
    for hrp in ("bc1", "tb1", "bcrt1"):
        if a.startswith(hrp):
            version = a[len(hrp)]
            if version == "q":
                return {42: "P2WPKH", 62: "P2WSH"}.get(len(a) - (len(hrp) - 3), "SegWit v0")
            if version == "p":
                return "P2TR"
            return f"SegWit v{version}"
    if address[0] in "1mn":
        return "P2PKH"
    if address[0] in "32":
        return "P2SH (multisig veya wrapped SegWit olabilir)"
    return "bilinmiyor"


def build_report(address: str | None, network: str, provider: str | None,
                 utxos: list[dict], stats: dict | None) -> dict:
    rows = sorted(utxos, key=lambda u: u["value"], reverse=True)  # coin selection için büyükten küçüğe

    items, total, conf_total, conf_count = [], 0, 0, 0
    for u in rows:
        status = u.get("status", {})
        confirmed = bool(status.get("confirmed"))
        total += u["value"]
        if confirmed:
            conf_total += u["value"]
            conf_count += 1
        items.append({
            "outpoint": f"{u['txid']}:{u['vout']}",
            "txid": u["txid"],
            "vout": u["vout"],
            "value_sat": u["value"],
            "value_btc": btc(u["value"]),
            "confirmed": confirmed,
            "block_height": status.get("block_height"),
            "block_time": status.get("block_time"),
        })

    header = {
        "address": address,
        "network": network,
        "address_type": address_type(address) if address else None,
        "provider": provider,
        "fetched_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "utxo_count": len(items),
        "total_value_sat": total,
        "total_value_btc": btc(total),
        "confirmed_utxo_count": conf_count,
        "confirmed_value_sat": conf_total,
        "confirmed_value_btc": btc(conf_total),
        "unconfirmed_utxo_count": len(items) - conf_count,
        "unconfirmed_value_sat": total - conf_total,
    }

    if stats:
        cs = stats.get("chain_stats", {})
        header["address_stats"] = {
            "tx_count": cs.get("tx_count"),
            "total_received_sat": cs.get("funded_txo_sum"),
            "total_received_btc": btc(cs["funded_txo_sum"]) if "funded_txo_sum" in cs else None,
            "total_spent_sat": cs.get("spent_txo_sum"),
            "received_output_count": cs.get("funded_txo_count"),
            "spent_output_count": cs.get("spent_txo_count"),
        }

    return {"header": header, "utxos": items}


def main() -> int:
    args = sys.argv[1:]
    out_path = None
    if "-o" in args:
        i = args.index("-o")
        out_path = args[i + 1] if i + 1 < len(args) else None
        del args[i:i + 2]
    if not args:
        print(__doc__, file=sys.stderr)
        return 1

    try:
        if args[0] == "--json":
            with open(args[1], encoding="utf-8") as f:
                utxos = json.load(f)
            address, network, provider, stats = None, "offline", None, None
        else:
            address = args[0].strip()
            network = args[1] if len(args) > 1 else "mainnet"
            utxos, stats, provider = fetch(address, network)
    except (RuntimeError, ValueError, OSError, json.JSONDecodeError) as e:
        print(f"Hata: {e}", file=sys.stderr)
        return 2

    report = build_report(address, network, provider, utxos, stats)

    if out_path is None:
        stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        out_path = f"utxos_{address or 'offline'}_{stamp}.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=False, indent=2)

    print(out_path)  # sadece dosya yolu
    return 0


if __name__ == "__main__":
    sys.exit(main())
