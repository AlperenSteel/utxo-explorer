# UTXO Gezgini

Bitcoin'in UTXO modelini anlatmak için yazdığım, tarayıcıda çalışan bir araç. İki bölümü var:

- **Zincir:** canlı zincirde adres ve işlem gezgini. Bir adresin harcanmamış çıktılarını (UTXO) daire haritası ve liste olarak, bir işlemin girişlerini, çıkışlarını, para akışını ve ham byte'larını alan alan gösterir. Her banknotun kilidini ("kim harcayabilir?") ve input'larda kilidi açan veriyi (scriptSig, witness) insan diliyle açıklar.
- **Anatomi:** aynı ödemenin Legacy (P2PKH), SegWit v0 (P2WPKH) ve Taproot (P2TR) ile kurulmuş hâlleri; her imzanın hangi byte'ları mühürlediği, imza kopyalama saldırısı ve `input_index`'in neden mesajda olduğu.

*A browser-based teaching tool for Bitcoin's UTXO model: a live address / transaction explorer (UTXO bubble map, money-flow diagram, byte-level decoder) plus a "transaction anatomy" section comparing what Legacy, SegWit v0 and Taproot signatures commit to. UI and docs are in Turkish.*

Canlı veriler public [Esplora API](https://github.com/Blockstream/esplora/blob/master/API.md)'sinden gelir (mempool.space, yedek olarak blockstream.info). Sunucu, kurulum, derleme ya da bağımlılık yok.

## Özellikler

**Zincir**
- Adres ya da txid'i otomatik ayırt eder; mainnet / testnet / signet
- **UTXO daire haritası:** her UTXO bir daire (büyük daire = büyük miktar, logaritmik; renk = yaş); büyükler ortada, elips biçiminde dizilir; üzerine gelince büyür ve ayrıntı gösterir, tıklayınca detay penceresi açılır
- Adres özeti (UTXO sayısı, toplam / onaylı / onaysız değer, işlem sayısı, toplam alınan / harcanan) ve büyükten küçüğe sıralı UTXO listesi
- **Banknotların akışı:** girişlerden işleme, işlemden çıkışlara ve fee'ye giden şeritler; kalınlık miktarla orantılı, kutular tıklanabilir
- İşlem özeti: versiyon, locktime, boyut / ağırlık / vbyte, fee ve fee oranı, SegWit, RBF, coinbase (BIP34 blok yüksekliği ve madenci etiketi dahil); `Σ input − Σ output = fee` kontrolü
- Ham byte çözümleyici: işlemin hex'i alan alan okunur; renkli hex ve tablo birbirine bağlı. Byte'lardan txid (SHA256d), wtxid, boyut ve ağırlık hesaplanıp API ile karşılaştırılır
- Açıklamalı JSON: API'nin döndürdüğü her alanın yanında açıklama ve alanın kaynağı (byte'larda yazıyor / byte'lardan hesaplanıyor / zincirden geliyor)
- Ayrıntı penceresi: output için kilit türü, scriptPubKey, onay ve harcanma durumu; input için harcanan banknot ve kilidi açan veri (scriptSig, etiketli witness öğeleri, P2SH zarfından ne çıktığı)
- Sonucu JSON olarak indirme

**Anatomi**
- Ali'nin iki banknotla Ayşe'ye yaptığı ödeme üç kilit türüyle: ham hex ↔ alan tablosu, iki imzanın byte'ları, imzalanan mesaj (preimage), kapsar / kapsamaz listesi, "uygulama miktarda yalan söylerse" testi
- Karşılaştırma matrisi ve sighash tipleri
- **Hangi input?** `input_index` olmadan Taproot imzasının kopyalanabilmesi (gerçek kural / hayali kural)
- **Dolandırıcılık akışı:** rol kartları, sıra diyagramı, adım adım PSBT'ler
- İmzalar gerçek (libsecp256k1 ile doğrulandı); önceki işlemler ve anahtarlar örnek için üretildi, ağa yayınlanamaz

**İki bölüm arasında**
- Her kilit türü sekmesinden zincirdeki gerçek bir örneğe (P2PKH, P2WPKH, P2TR) geçiş
- Gezginde bir banknotun kilidinden ilgili anatomi sekmesine geçiş

**Sunum için**
- **Sunum modu** (sağ üstteki düğme ya da `P`): her şeyi büyütür
- `/` aramaya odaklanır
- Adres çubuğunda durum: `#q=<txid|adres>&net=mainnet`, `#anatomi/taproot` gibi. Geri tuşu, yenileme ve hazır sekmeler çalışır
- **İnternetsiz yedek:** anasayfadaki örneklerin ve köprü işlemlerinin verisi `offline-data.js`'te durur; internet yoksa ya da sağlayıcı 5 saniyede cevap vermezse bu yedek gösterilir
- Açık / koyu tema, telefon genişliğinde de çalışır

**Komut satırı (`utxo_list.py`)**
- Bir adresin UTXO listesini, başlığında adres bilgileri ve toplamlar olan bir JSON dosyasına yazar
- Sadece Python standart kütüphanesi (3.9+)

## Kullanım

### Arayüz

`index.html` dosyasını tarayıcıda açmak yeterli (çift tıklama). GitHub Pages ile de yayınlanabilir: depo ayarlarında *Pages → Deploy from a branch → main / (root)*.

### Sunumdan önce: yedeği tazele

```bash
python3 offline_kaydet.py
```

Örnek işlemlerin ve adreslerin (her adresin en büyük 15 UTXO'su dahil) yanıtlarını `offline-data.js`'e yazar; `curl` gerekir. Onay sayıları ve UTXO durumları kayıt anındaki gibi görünür, bu yüzden sunumdan kısa süre önce çalıştırmak iyi olur. Örnekler betiğin başındaki `TXS` ve `ADDRESSES` listelerinde, anasayfadaki butonlar `index.html`'de.

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

## Dosyalar

| Dosya | İçerik |
|---|---|
| `index.html` | Uygulama: arayüz, Zincir bölümü, yönlendirme |
| `anatomi.js`, `anatomi.css` | Anatomi bölümü: örnek işlemlerin verisi, imzalar ve sayfalar |
| `offline-data.js` | İnternetsiz yedek (`offline_kaydet.py` üretir) |
| `offline_kaydet.py` | Yedeği tazeleyen betik |
| `utxo_list.py` | Komut satırı: adresin UTXO listesini JSON'a yazar |

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
