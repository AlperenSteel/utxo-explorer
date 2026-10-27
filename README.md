# UTXO ve İşlem Gezgini

Bitcoin'in UTXO modelini öğrenirken yazdığım küçük bir araç. Bir **adres** girince o adresin harcanmamış çıktılarını (UTXO), bir **txid** girince işlemin bütün alanlarını gösterir. Her banknotun kilidini ("kim harcayabilir?") ve input'larda kilidi açan veriyi (scriptSig, witness) insan diliyle açıklar.

*A small learning tool for Bitcoin's UTXO model: look up an address's unspent outputs or decode every field of a transaction, with plain-language explanations of each output's locking script and each input's unlocking data. UI and docs are in Turkish.*

Veriler public [Esplora API](https://github.com/Blockstream/esplora/blob/master/API.md)'sinden gelir (mempool.space, yedek olarak blockstream.info). Sunucu, kurulum ya da bağımlılık yok.

## Özellikler

**Tarayıcı arayüzü (`index.html`)**
- Adres ya da txid'i otomatik ayırt eder; mainnet / testnet / signet
- Adres görünümü: özet (UTXO sayısı, toplam / onaylı / onaysız değer, işlem sayısı, toplam alınan / harcanan) ve coin selection için büyükten küçüğe sıralı UTXO listesi
- İşlem görünümü: versiyon, locktime, boyut / ağırlık / vbyte, fee ve fee oranı, SegWit, RBF, coinbase; `Σ input − Σ output = fee` kontrolü; input ve output tabloları; ham hex ve JSON
- Ayrıntı penceresi:
  - **Output / UTXO:** kilit türü ve kim harcayabilir, scriptPubKey (hex + asm), onay sayısı, harcanma durumu
  - **Input:** harcanan eski banknot + kilidi açan veri (scriptSig, etiketli witness öğeleri, P2SH zarfından ne çıktığı)
- Banknottan banknota, işlemden işleme sayfa içinde gezinme
- Sonucu JSON olarak indirme
- Açık / koyu tema

**Komut satırı (`utxo_list.py`)**
- Bir adresin UTXO listesini, başlığında adres bilgileri ve toplamlar olan bir JSON dosyasına yazar
- Sadece Python standart kütüphanesi (3.9+)

## Kullanım

### Arayüz

`index.html` dosyasını tarayıcıda aç (çift tıklamak yeterli). Kutuya bir adres ya da txid yaz, ağı seç, **Sorgula**'ya bas. Satırlara tıklayınca ayrıntı penceresi açılır.

### Komut satırı

```bash
python3 utxo_list.py <adres> [mainnet|testnet|signet] [-o cikti.json]
```

Örnek çıktı:

```json
{
  "header": {
    "address": "bc1q…",
    "network": "mainnet",
    "address_type": "P2WPKH",
    "utxo_count": 13,
    "total_value_sat": 33067167,
    "total_value_btc": "0.33067167",
    "confirmed_utxo_count": 13,
    "address_stats": { "tx_count": 13, "total_received_btc": "0.33067167", "total_spent_sat": 0 }
  },
  "utxos": [
    { "outpoint": "f7e0…ddf1a:1", "value_sat": 12940424, "value_btc": "0.12940424", "confirmed": true }
  ]
}
```

Miktarlar her zaman tam sayı **satoshi** olarak tutulur; BTC değerleri yuvarlama hatası olmasın diye metin olarak yazılır.

## Gizlilik notu

Bu araç sorguları üçüncü taraf bir sağlayıcıya (mempool.space / blockstream.info) gönderir. Sağlayıcı **sorguladığın adresleri, işlemleri ve IP adresini görür** ve bunları birbirine bağlayabilir. Kendi cüzdan adreslerini sorgulamak, o adreslerin sana ait olduğunu sağlayıcıya söylemek demektir. Öğrenmek için herkese açık örnek adresler ya da signet kullan. Gerçek kullanım için kendi node'unu ve indexer'ını (Bitcoin Core + Fulcrum/electrs ya da kendi Esplora kurulumun) tercih et.

## Sınırlar

- Public API'lerin istek sınırları vardır; çok sık sorguda geçici hata alabilirsin.
- Çok sayıda UTXO'su olan adreslerde sağlayıcı listeyi döndürmeyebilir.
- Kilit türü açıklamaları sağlayıcının `scriptpubkey_type` alanına dayanır; nadir türler ham adıyla gösterilir.
- Adres türü tahmini ön eke bakar; `3…` bir P2SH'tir ama içinde ne olduğu (multisig, wrapped SegWit) ancak harcanınca görünür.

## Yol haritası

- [ ] Adres çözümleyici: adres → scriptPubKey (bech32 / Base58Check decode)
- [ ] PSBT çözümleyici: input'lar, output'lar, eksik imzalar, fee
- [ ] Coin selection simülatörü: UTXO listesinden hedef miktar için seçim ve fee tahmini

## Lisans

[MIT](LICENSE)
