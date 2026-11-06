#!/usr/bin/env python3
"""Anasayfadaki örneklerin ve anatomi köprülerinin verisini offline-data.js dosyasına kaydeder.

Sunumda internet koparsa ya da mempool.space yavaşlarsa site bu yedeği kullanır.
Sunumdan önce bir kez çalıştır:  python3 offline_kaydet.py
"""
import json
import subprocess
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

API = "https://mempool.space/api"
TXS = [
    "b222e767c4f9cd6324b341c6810560e2494721e20f5647ea0e46f81d2f71c12e",  # SegWit işlem
    "d553fb33b1eb48da4e0873e8004c801c787ed4fb6970689724bca4b300e0a8ba",  # Coinbase işlem
    "2116db9f2a882140f9f21e2002392c7f783d698d6b10ed26c40e4ccac4e3e6a2",  # Anatomi köprüsü: P2PKH
    "43f1000106db9e7da4fd8bf8c95ae1947c33df2f925607f85577e3ea3c284e69",  # Anatomi köprüsü: P2TR
]
ADDRESSES = [
    "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S",  # Hal Finney
    "1AfCc4F9c4VTYSE31PUe2kUEKs6ZxiDjxm",  # Alperen
]
ADDRESS_UTXO_DETAILS = 15  # adres başına ayrıntısı kaydedilen en büyük UTXO sayısı
OUT = Path(__file__).with_name("offline-data.js")

data = {}


def get(path, text=False):
    key = "mainnet:" + path
    if key in data:
        return data[key]
    for attempt in range(4):
        r = subprocess.run(["curl", "-sS", "-f", "--max-time", "30", API + path], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(2 + attempt * 3)  # sağlayıcı hız sınırı
    else:
        print(f"  ! alınamadı: {path} ({r.stderr.strip()})", file=sys.stderr)
        return None
    value = r.stdout.strip() if text else json.loads(r.stdout)
    data[key] = value
    time.sleep(0.15)
    return value


def save_tx(txid, with_inputs=True):
    tx = get(f"/tx/{txid}")
    if not tx:
        return
    get(f"/tx/{txid}/hex", text=True)
    get(f"/tx/{txid}/outspends")
    for n in range(len(tx["vout"])):
        get(f"/tx/{txid}/outspend/{n}")
    if with_inputs:
        for v in tx["vin"]:
            if not v.get("is_coinbase"):
                save_tx(v["txid"], with_inputs=False)


get("/blocks/tip/height", text=True)
get("/v1/fees/recommended")  # harcama simülasyonunun ücret oranı
for txid in TXS:
    print("işlem", txid[:16])
    save_tx(txid)
for addr in ADDRESSES:
    print("adres", addr)
    get(f"/address/{addr}")
    utxos = get(f"/address/{addr}/utxo") or []
    for u in sorted(utxos, key=lambda u: -u["value"])[:ADDRESS_UTXO_DETAILS]:
        tx = get(f"/tx/{u['txid']}")
        get(f"/tx/{u['txid']}/outspend/{u['vout']}")
        get(f"/tx/{u['txid']}/outspends")
        get(f"/tx/{u['txid']}/hex", text=True)

payload = {"saved_at": datetime.now(timezone.utc).isoformat(timespec="seconds"), "data": data}
OUT.write_text("// offline_kaydet.py üretti; elle düzenleme.\nwindow.OFFLINE_DATA = "
               + json.dumps(payload, separators=(",", ":"), ensure_ascii=False) + ";\n", encoding="utf-8")
print(f"{len(data)} yanıt kaydedildi → {OUT.name} ({OUT.stat().st_size / 1024:.0f} KB)")
