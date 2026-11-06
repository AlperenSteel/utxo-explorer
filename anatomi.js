// Bitcoin İşlem Anatomisi: aynı ödeme, üç kilit türü.
// Örnek işlemler, imzalar ve sayfalar. index.html'deki #anatomi bölümüne çizer; dışarıya yalnız window.Anatomy açılır.
(function () {
'use strict';
const D = {"legacy": {"name": "legacy", "raw": "020000000257be1ca07e08348f4983cd1216bb4a365d2e3e33512d84d950fe80c752e96c36000000006a47304402206fc67a2a92e76c7ed4e4b833452c8b890c5ef2e3510e91229775e84cdeb5723c0220120c1e2707df8554ee98749df68911452389e66b9c3656ac2e09aa71fb84ef3101210250071bd79eb885ccb37808834aabbe29f74cf8b0a999be1e71f5ba34a91fbd49fdffffffe7e614e61432cb436ac7a51eb13067464cb5bc03a5926d06c4325a289d5cda2c010000006a473044022027df1096ee21635804c991238f7d77c03ac7be5173ab74de7ed3093a27fcfee502205d55177da9a6bae5e9d243da26eee596a180ffd756c62234fa5ccf659a43f9b6012102b944f0070f228141f878ddd49a84a6496b0867dd4de40fd10c676cbd9b9563e7fdffffff02c0270900000000001976a9144c1afa7614e95b5295d3721010a4452b3026146288acf80b0600000000001976a914c4765581e4d397639204c2158892d5737ec8149188ac00000000", "size": 372, "weight": 1488, "vsize": 372, "fee": 3720, "change": 396280, "txid": "1df47500b7938a285fdf38ecf0a55780a5d55e79fbd261f4b64caeb4802f306b", "wtxid": "1df47500b7938a285fdf38ecf0a55780a5d55e79fbd261f4b64caeb4802f306b", "fields": [{"label": "version", "hex": "02000000", "meaning": "s\u00fcr\u00fcm 2", "part": "base", "cls": "meta"}, {"label": "input say\u0131s\u0131", "hex": "02", "meaning": "2 input", "part": "base", "cls": "meta"}, {"label": "input #0 \u00b7 \u00f6nceki txid", "hex": "57be1ca07e08348f4983cd1216bb4a365d2e3e33512d84d950fe80c752e96c36", "meaning": "ters \u00e7evrilmi\u015f: 366ce952\u2026be57", "part": "base", "cls": "in"}, {"label": "input #0 \u00b7 vout", "hex": "00000000", "meaning": "o i\u015flemin 0. \u00e7\u0131kt\u0131s\u0131", "part": "base", "cls": "in"}, {"label": "input #0 \u00b7 scriptSig uzunlu\u011fu", "hex": "6a", "meaning": "106 byte", "part": "base", "cls": "in"}, {"label": "input #0 \u00b7 imza", "hex": "47304402206fc67a2a92e76c7ed4e4b833452c8b890c5ef2e3510e91229775e84cdeb5723c0220120c1e2707df8554ee98749df68911452389e66b9c3656ac2e09aa71fb84ef3101", "meaning": "push 71 B: DER imza + sighash 01", "part": "base", "cls": "sig"}, {"label": "input #0 \u00b7 public key", "hex": "210250071bd79eb885ccb37808834aabbe29f74cf8b0a999be1e71f5ba34a91fbd49", "meaning": "push 33 B: s\u0131k\u0131\u015ft\u0131r\u0131lm\u0131\u015f public key", "part": "base", "cls": "sig"}, {"label": "input #0 \u00b7 sequence", "hex": "fdffffff", "meaning": "fdffffff: RBF a\u00e7\u0131k", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 \u00f6nceki txid", "hex": "e7e614e61432cb436ac7a51eb13067464cb5bc03a5926d06c4325a289d5cda2c", "meaning": "ters \u00e7evrilmi\u015f: 2cda5c9d\u2026e6e7", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 vout", "hex": "01000000", "meaning": "o i\u015flemin 1. \u00e7\u0131kt\u0131s\u0131", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 scriptSig uzunlu\u011fu", "hex": "6a", "meaning": "106 byte", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 imza", "hex": "473044022027df1096ee21635804c991238f7d77c03ac7be5173ab74de7ed3093a27fcfee502205d55177da9a6bae5e9d243da26eee596a180ffd756c62234fa5ccf659a43f9b601", "meaning": "push 71 B: DER imza + sighash 01", "part": "base", "cls": "sig"}, {"label": "input #1 \u00b7 public key", "hex": "2102b944f0070f228141f878ddd49a84a6496b0867dd4de40fd10c676cbd9b9563e7", "meaning": "push 33 B: s\u0131k\u0131\u015ft\u0131r\u0131lm\u0131\u015f public key", "part": "base", "cls": "sig"}, {"label": "input #1 \u00b7 sequence", "hex": "fdffffff", "meaning": "fdffffff: RBF a\u00e7\u0131k", "part": "base", "cls": "in"}, {"label": "output say\u0131s\u0131", "hex": "02", "meaning": "2 output", "part": "base", "cls": "meta"}, {"label": "output #0 \u00b7 miktar", "hex": "c027090000000000", "meaning": "600 000 sat \u2192 Ay\u015fe", "part": "base", "cls": "out"}, {"label": "output #0 \u00b7 kilit", "hex": "1976a9144c1afa7614e95b5295d3721010a4452b3026146288ac", "meaning": "P2PKH: DUP HASH160 <20B> EQUALVERIFY CHECKSIG", "part": "base", "cls": "out"}, {"label": "output #1 \u00b7 miktar", "hex": "f80b060000000000", "meaning": "396 280 sat \u2192 para \u00fcst\u00fc", "part": "base", "cls": "out"}, {"label": "output #1 \u00b7 kilit", "hex": "1976a914c4765581e4d397639204c2158892d5737ec8149188ac", "meaning": "P2PKH: Ali\u2019nin yeni adresi", "part": "base", "cls": "out"}, {"label": "locktime", "hex": "00000000", "meaning": "zaman kilidi yok", "part": "base", "cls": "meta"}], "inputs": [{"index": 0, "preimage": "020000000257be1ca07e08348f4983cd1216bb4a365d2e3e33512d84d950fe80c752e96c36000000001976a914ee840fb63856fa3593913d45ebd2475350d18b5188acfdffffffe7e614e61432cb436ac7a51eb13067464cb5bc03a5926d06c4325a289d5cda2c0100000000fdffffff02c0270900000000001976a9144c1afa7614e95b5295d3721010a4452b3026146288acf80b0600000000001976a914c4765581e4d397639204c2158892d5737ec8149188ac0000000001000000", "preimage_len": 189, "parts": [{"name": "version", "hex": "02000000", "kind": "kapsar"}, {"name": "input say\u0131s\u0131", "hex": "02", "kind": "kapsar"}, {"name": "input #0 \u00f6nceki txid", "hex": "57be1ca07e08348f4983cd1216bb4a365d2e3e33512d84d950fe80c752e96c36", "kind": "kapsar"}, {"name": "input #0 vout", "hex": "00000000", "kind": "kapsar"}, {"name": "input #0 script uzunlu\u011fu", "hex": "19", "kind": "kapsar"}, {"name": "input #0 scriptSig yerine harcanan kilit (scriptPubKey)", "hex": "76a914ee840fb63856fa3593913d45ebd2475350d18b5188ac", "kind": "yerine"}, {"name": "input #0 sequence", "hex": "fdffffff", "kind": "kapsar"}, {"name": "input #1 \u00f6nceki txid", "hex": "e7e614e61432cb436ac7a51eb13067464cb5bc03a5926d06c4325a289d5cda2c", "kind": "kapsar"}, {"name": "input #1 vout", "hex": "01000000", "kind": "kapsar"}, {"name": "input #1 script uzunlu\u011fu", "hex": "00", "kind": "kapsar"}, {"name": "input #1 scriptSig \u2192 BO\u015eALTILDI", "hex": "", "kind": "bos"}, {"name": "input #1 sequence", "hex": "fdffffff", "kind": "kapsar"}, {"name": "output say\u0131s\u0131", "hex": "02", "kind": "kapsar"}, {"name": "output #0 miktar", "hex": "c027090000000000", "kind": "kapsar"}, {"name": "output #0 kilit", "hex": "1976a9144c1afa7614e95b5295d3721010a4452b3026146288ac", "kind": "kapsar"}, {"name": "output #1 miktar", "hex": "f80b060000000000", "kind": "kapsar"}, {"name": "output #1 kilit", "hex": "1976a914c4765581e4d397639204c2158892d5737ec8149188ac", "kind": "kapsar"}, {"name": "locktime", "hex": "00000000", "kind": "kapsar"}, {"name": "sighash tipi (4 byte)", "hex": "01000000", "kind": "kapsar"}], "hash": "0c91b0cb29f68b6191965d9d15e56db7d29143779287f771d6bc345eef72d387", "hash_rule": "SHA256(SHA256(preimage))", "sig": "304402206fc67a2a92e76c7ed4e4b833452c8b890c5ef2e3510e91229775e84cdeb5723c0220120c1e2707df8554ee98749df68911452389e66b9c3656ac2e09aa71fb84ef3101", "der": "304402206fc67a2a92e76c7ed4e4b833452c8b890c5ef2e3510e91229775e84cdeb5723c0220120c1e2707df8554ee98749df68911452389e66b9c3656ac2e09aa71fb84ef31", "r": "6fc67a2a92e76c7ed4e4b833452c8b890c5ef2e3510e91229775e84cdeb5723c", "s": "120c1e2707df8554ee98749df68911452389e66b9c3656ac2e09aa71fb84ef31", "pub": "0250071bd79eb885ccb37808834aabbe29f74cf8b0a999be1e71f5ba34a91fbd49", "amount": 700000, "spk": "76a914ee840fb63856fa3593913d45ebd2475350d18b5188ac"}, {"index": 1, "preimage": "020000000257be1ca07e08348f4983cd1216bb4a365d2e3e33512d84d950fe80c752e96c360000000000fdffffffe7e614e61432cb436ac7a51eb13067464cb5bc03a5926d06c4325a289d5cda2c010000001976a9146dec88fae9a2f30f16edd9a7654d5ca8df4a36b288acfdffffff02c0270900000000001976a9144c1afa7614e95b5295d3721010a4452b3026146288acf80b0600000000001976a914c4765581e4d397639204c2158892d5737ec8149188ac0000000001000000", "preimage_len": 189, "parts": [{"name": "version", "hex": "02000000", "kind": "kapsar"}, {"name": "input say\u0131s\u0131", "hex": "02", "kind": "kapsar"}, {"name": "input #0 \u00f6nceki txid", "hex": "57be1ca07e08348f4983cd1216bb4a365d2e3e33512d84d950fe80c752e96c36", "kind": "kapsar"}, {"name": "input #0 vout", "hex": "00000000", "kind": "kapsar"}, {"name": "input #0 script uzunlu\u011fu", "hex": "00", "kind": "kapsar"}, {"name": "input #0 scriptSig \u2192 BO\u015eALTILDI", "hex": "", "kind": "bos"}, {"name": "input #0 sequence", "hex": "fdffffff", "kind": "kapsar"}, {"name": "input #1 \u00f6nceki txid", "hex": "e7e614e61432cb436ac7a51eb13067464cb5bc03a5926d06c4325a289d5cda2c", "kind": "kapsar"}, {"name": "input #1 vout", "hex": "01000000", "kind": "kapsar"}, {"name": "input #1 script uzunlu\u011fu", "hex": "19", "kind": "kapsar"}, {"name": "input #1 scriptSig yerine harcanan kilit (scriptPubKey)", "hex": "76a9146dec88fae9a2f30f16edd9a7654d5ca8df4a36b288ac", "kind": "yerine"}, {"name": "input #1 sequence", "hex": "fdffffff", "kind": "kapsar"}, {"name": "output say\u0131s\u0131", "hex": "02", "kind": "kapsar"}, {"name": "output #0 miktar", "hex": "c027090000000000", "kind": "kapsar"}, {"name": "output #0 kilit", "hex": "1976a9144c1afa7614e95b5295d3721010a4452b3026146288ac", "kind": "kapsar"}, {"name": "output #1 miktar", "hex": "f80b060000000000", "kind": "kapsar"}, {"name": "output #1 kilit", "hex": "1976a914c4765581e4d397639204c2158892d5737ec8149188ac", "kind": "kapsar"}, {"name": "locktime", "hex": "00000000", "kind": "kapsar"}, {"name": "sighash tipi (4 byte)", "hex": "01000000", "kind": "kapsar"}], "hash": "8ac23ef365483dbb38106bd90d292c896620e4590362043fb5dc89428d1dbb17", "hash_rule": "SHA256(SHA256(preimage))", "sig": "3044022027df1096ee21635804c991238f7d77c03ac7be5173ab74de7ed3093a27fcfee502205d55177da9a6bae5e9d243da26eee596a180ffd756c62234fa5ccf659a43f9b601", "der": "3044022027df1096ee21635804c991238f7d77c03ac7be5173ab74de7ed3093a27fcfee502205d55177da9a6bae5e9d243da26eee596a180ffd756c62234fa5ccf659a43f9b6", "r": "27df1096ee21635804c991238f7d77c03ac7be5173ab74de7ed3093a27fcfee5", "s": "5d55177da9a6bae5e9d243da26eee596a180ffd756c62234fa5ccf659a43f9b6", "pub": "02b944f0070f228141f878ddd49a84a6496b0867dd4de40fd10c676cbd9b9563e7", "amount": 300000, "spk": "76a9146dec88fae9a2f30f16edd9a7654d5ca8df4a36b288ac"}], "prev_display": ["366ce952c780fe50d9842d51333e2e5d364abb1612cd83498f34087ea01cbe57", "2cda5c9d285a32c4066d92a503bcb54c466730b11ea5c76a43cb3214e614e6e7"], "spks": ["76a914ee840fb63856fa3593913d45ebd2475350d18b5188ac", "76a9146dec88fae9a2f30f16edd9a7654d5ca8df4a36b288ac"], "outspks": ["76a9144c1afa7614e95b5295d3721010a4452b3026146288ac", "76a914c4765581e4d397639204c2158892d5737ec8149188ac"]}, "segwit": {"name": "segwit", "raw": "02000000000102b5ad77d5556e37d57f3bdc3788f874644ddb1eb80bea89d57a076a8bfeabe14a0000000000fdffffff235d56063b532a64cce48fb92746b7e0e5d8f60280565664054fc140b13cb5bd0100000000fdffffff02c0270900000000001600144c1afa7614e95b5295d3721010a4452b3026146260120600000000001600141d358e6f4655b0c6778f9bbf4ee6fb56d4a4487d024730440220388b98bb29a4fffa82da8fb14a500818545ddd78ec5aadc76d608a6f942f8e1b02207af948c6adcf372480868b06297ba1aa345d429a4b17bc3045999fb1a8bd7dec012102569da634845bc3b74d62845259628b0657710af3e2c2d9a2e5829e398af6a07b02473044022016856acb65a8b52d5009ed5b15c2aeabf87f8cc16cb9c1e112e5e20587a1764a02201190c073059e566fb3b96a664dbddbbaf76bd5d15d9a6607f367b1824008919a012102b2989e4c1cc60265902108e681c20d56bbdbe299d61ddd73f41328cf4d1fe79500000000", "size": 370, "base_size": 154, "weight": 832, "vsize": 208, "fee": 2080, "change": 397920, "txid": "99672be2885b13f010d4aae036635c44fcd08a3914ab57b1eeb2fbe2640897fb", "wtxid": "4f389ce036fb8b4376dd13d9b17ff46eafe54ab5c53cb565b766c679de3fcca7", "stripped": "0200000002b5ad77d5556e37d57f3bdc3788f874644ddb1eb80bea89d57a076a8bfeabe14a0000000000fdffffff235d56063b532a64cce48fb92746b7e0e5d8f60280565664054fc140b13cb5bd0100000000fdffffff02c0270900000000001600144c1afa7614e95b5295d3721010a4452b3026146260120600000000001600141d358e6f4655b0c6778f9bbf4ee6fb56d4a4487d00000000", "fields": [{"label": "version", "hex": "02000000", "meaning": "s\u00fcr\u00fcm 2", "part": "base", "cls": "meta"}, {"label": "marker", "hex": "00", "meaning": "SegWit i\u015fareti (eski node: \u201c0 input\u201d)", "part": "wit", "cls": "wit"}, {"label": "flag", "hex": "01", "meaning": "witness var", "part": "wit", "cls": "wit"}, {"label": "input say\u0131s\u0131", "hex": "02", "meaning": "2 input", "part": "base", "cls": "meta"}, {"label": "input #0 \u00b7 \u00f6nceki txid", "hex": "b5ad77d5556e37d57f3bdc3788f874644ddb1eb80bea89d57a076a8bfeabe14a", "meaning": "ters \u00e7evrilmi\u015f: 4ae1abfe\u2026adb5", "part": "base", "cls": "in"}, {"label": "input #0 \u00b7 vout", "hex": "00000000", "meaning": "o i\u015flemin 0. \u00e7\u0131kt\u0131s\u0131", "part": "base", "cls": "in"}, {"label": "input #0 \u00b7 scriptSig uzunlu\u011fu", "hex": "00", "meaning": "bo\u015f: imza burada de\u011fil", "part": "base", "cls": "in"}, {"label": "input #0 \u00b7 sequence", "hex": "fdffffff", "meaning": "fdffffff: RBF a\u00e7\u0131k", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 \u00f6nceki txid", "hex": "235d56063b532a64cce48fb92746b7e0e5d8f60280565664054fc140b13cb5bd", "meaning": "ters \u00e7evrilmi\u015f: bdb53cb1\u20265d23", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 vout", "hex": "01000000", "meaning": "o i\u015flemin 1. \u00e7\u0131kt\u0131s\u0131", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 scriptSig uzunlu\u011fu", "hex": "00", "meaning": "bo\u015f: imza burada de\u011fil", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 sequence", "hex": "fdffffff", "meaning": "fdffffff: RBF a\u00e7\u0131k", "part": "base", "cls": "in"}, {"label": "output say\u0131s\u0131", "hex": "02", "meaning": "2 output", "part": "base", "cls": "meta"}, {"label": "output #0 \u00b7 miktar", "hex": "c027090000000000", "meaning": "600 000 sat \u2192 Ay\u015fe", "part": "base", "cls": "out"}, {"label": "output #0 \u00b7 kilit", "hex": "1600144c1afa7614e95b5295d3721010a4452b30261462", "meaning": "P2WPKH: OP_0 <20B pubkey hash>", "part": "base", "cls": "out"}, {"label": "output #1 \u00b7 miktar", "hex": "6012060000000000", "meaning": "397 920 sat \u2192 para \u00fcst\u00fc", "part": "base", "cls": "out"}, {"label": "output #1 \u00b7 kilit", "hex": "1600141d358e6f4655b0c6778f9bbf4ee6fb56d4a4487d", "meaning": "P2WPKH: Ali\u2019nin yeni adresi", "part": "base", "cls": "out"}, {"label": "witness #0 \u00b7 \u00f6\u011fe say\u0131s\u0131", "hex": "02", "meaning": "2 \u00f6\u011fe", "part": "wit", "cls": "wit"}, {"label": "witness #0 \u00b7 imza", "hex": "4730440220388b98bb29a4fffa82da8fb14a500818545ddd78ec5aadc76d608a6f942f8e1b02207af948c6adcf372480868b06297ba1aa345d429a4b17bc3045999fb1a8bd7dec01", "meaning": "71 B: DER imza + sighash 01", "part": "wit", "cls": "sig"}, {"label": "witness #0 \u00b7 public key", "hex": "2102569da634845bc3b74d62845259628b0657710af3e2c2d9a2e5829e398af6a07b", "meaning": "33 B public key", "part": "wit", "cls": "sig"}, {"label": "witness #1 \u00b7 \u00f6\u011fe say\u0131s\u0131", "hex": "02", "meaning": "2 \u00f6\u011fe", "part": "wit", "cls": "wit"}, {"label": "witness #1 \u00b7 imza", "hex": "473044022016856acb65a8b52d5009ed5b15c2aeabf87f8cc16cb9c1e112e5e20587a1764a02201190c073059e566fb3b96a664dbddbbaf76bd5d15d9a6607f367b1824008919a01", "meaning": "71 B: DER imza + sighash 01", "part": "wit", "cls": "sig"}, {"label": "witness #1 \u00b7 public key", "hex": "2102b2989e4c1cc60265902108e681c20d56bbdbe299d61ddd73f41328cf4d1fe795", "meaning": "33 B public key", "part": "wit", "cls": "sig"}, {"label": "locktime", "hex": "00000000", "meaning": "zaman kilidi yok", "part": "base", "cls": "meta"}], "inputs": [{"index": 0, "preimage": "02000000c7b2471ff6eb4c7f4bbeddd91d3f407517ea2f15981cbc91cadd4ef61862fefb957879fdce4d8ab885e32ff307d54e75884da52522cc53d3c4fdb60edb69a098b5ad77d5556e37d57f3bdc3788f874644ddb1eb80bea89d57a076a8bfeabe14a000000001976a914f9bb48be93eea0bc0ac054ec76bc634ff147430588ac60ae0a0000000000fdffffff947ed0601b504b63e511da220eec214d824d668326a3304c20348034659959940000000001000000", "preimage_len": 182, "parts": [{"name": "nVersion", "hex": "02000000", "kind": "kapsar"}, {"name": "hashPrevouts = dSHA256(t\u00fcm outpoint\u2019ler)", "hex": "c7b2471ff6eb4c7f4bbeddd91d3f407517ea2f15981cbc91cadd4ef61862fefb", "kind": "kapsar"}, {"name": "hashSequence = dSHA256(t\u00fcm sequence\u2019ler)", "hex": "957879fdce4d8ab885e32ff307d54e75884da52522cc53d3c4fdb60edb69a098", "kind": "kapsar"}, {"name": "outpoint (input #0)", "hex": "b5ad77d5556e37d57f3bdc3788f874644ddb1eb80bea89d57a076a8bfeabe14a00000000", "kind": "kapsar"}, {"name": "scriptCode (input #0 kilidi, P2PKH bi\u00e7iminde)", "hex": "1976a914f9bb48be93eea0bc0ac054ec76bc634ff147430588ac", "kind": "kapsar"}, {"name": "amount (input #0 miktar\u0131)", "hex": "60ae0a0000000000", "kind": "yeni"}, {"name": "nSequence (input #0)", "hex": "fdffffff", "kind": "kapsar"}, {"name": "hashOutputs = dSHA256(t\u00fcm output\u2019lar)", "hex": "947ed0601b504b63e511da220eec214d824d668326a3304c2034803465995994", "kind": "kapsar"}, {"name": "nLocktime", "hex": "00000000", "kind": "kapsar"}, {"name": "sighash tipi (4 byte)", "hex": "01000000", "kind": "kapsar"}], "hash": "eec4def6735cdb645e570abe0660a37ed4875a440907fa727afc0c73ed229938", "hash_rule": "SHA256(SHA256(preimage))  (BIP143)", "sig": "30440220388b98bb29a4fffa82da8fb14a500818545ddd78ec5aadc76d608a6f942f8e1b02207af948c6adcf372480868b06297ba1aa345d429a4b17bc3045999fb1a8bd7dec01", "der": "30440220388b98bb29a4fffa82da8fb14a500818545ddd78ec5aadc76d608a6f942f8e1b02207af948c6adcf372480868b06297ba1aa345d429a4b17bc3045999fb1a8bd7dec", "r": "388b98bb29a4fffa82da8fb14a500818545ddd78ec5aadc76d608a6f942f8e1b", "s": "7af948c6adcf372480868b06297ba1aa345d429a4b17bc3045999fb1a8bd7dec", "pub": "02569da634845bc3b74d62845259628b0657710af3e2c2d9a2e5829e398af6a07b", "amount": 700000, "spk": "0014f9bb48be93eea0bc0ac054ec76bc634ff1474305"}, {"index": 1, "preimage": "02000000c7b2471ff6eb4c7f4bbeddd91d3f407517ea2f15981cbc91cadd4ef61862fefb957879fdce4d8ab885e32ff307d54e75884da52522cc53d3c4fdb60edb69a098235d56063b532a64cce48fb92746b7e0e5d8f60280565664054fc140b13cb5bd010000001976a9149d7a17fc4ecec6b181823fd0982eca45ccec342888ace093040000000000fdffffff947ed0601b504b63e511da220eec214d824d668326a3304c20348034659959940000000001000000", "preimage_len": 182, "parts": [{"name": "nVersion", "hex": "02000000", "kind": "kapsar"}, {"name": "hashPrevouts = dSHA256(t\u00fcm outpoint\u2019ler)", "hex": "c7b2471ff6eb4c7f4bbeddd91d3f407517ea2f15981cbc91cadd4ef61862fefb", "kind": "kapsar"}, {"name": "hashSequence = dSHA256(t\u00fcm sequence\u2019ler)", "hex": "957879fdce4d8ab885e32ff307d54e75884da52522cc53d3c4fdb60edb69a098", "kind": "kapsar"}, {"name": "outpoint (input #1)", "hex": "235d56063b532a64cce48fb92746b7e0e5d8f60280565664054fc140b13cb5bd01000000", "kind": "kapsar"}, {"name": "scriptCode (input #1 kilidi, P2PKH bi\u00e7iminde)", "hex": "1976a9149d7a17fc4ecec6b181823fd0982eca45ccec342888ac", "kind": "kapsar"}, {"name": "amount (input #1 miktar\u0131)", "hex": "e093040000000000", "kind": "yeni"}, {"name": "nSequence (input #1)", "hex": "fdffffff", "kind": "kapsar"}, {"name": "hashOutputs = dSHA256(t\u00fcm output\u2019lar)", "hex": "947ed0601b504b63e511da220eec214d824d668326a3304c2034803465995994", "kind": "kapsar"}, {"name": "nLocktime", "hex": "00000000", "kind": "kapsar"}, {"name": "sighash tipi (4 byte)", "hex": "01000000", "kind": "kapsar"}], "hash": "0654cb2d9d357a93bf5c11f77eb8d0e052c7cbbbaf3511f819583e95b79d894d", "hash_rule": "SHA256(SHA256(preimage))  (BIP143)", "sig": "3044022016856acb65a8b52d5009ed5b15c2aeabf87f8cc16cb9c1e112e5e20587a1764a02201190c073059e566fb3b96a664dbddbbaf76bd5d15d9a6607f367b1824008919a01", "der": "3044022016856acb65a8b52d5009ed5b15c2aeabf87f8cc16cb9c1e112e5e20587a1764a02201190c073059e566fb3b96a664dbddbbaf76bd5d15d9a6607f367b1824008919a", "r": "16856acb65a8b52d5009ed5b15c2aeabf87f8cc16cb9c1e112e5e20587a1764a", "s": "1190c073059e566fb3b96a664dbddbbaf76bd5d15d9a6607f367b1824008919a", "pub": "02b2989e4c1cc60265902108e681c20d56bbdbe299d61ddd73f41328cf4d1fe795", "amount": 300000, "spk": "00149d7a17fc4ecec6b181823fd0982eca45ccec3428"}], "prev_display": ["4ae1abfe8b6a077ad589ea0bb81edb4d6474f88837dc3b7fd5376e55d577adb5", "bdb53cb140c14f056456568002f6d8e5e0b74627b98fe4cc642a533b06565d23"], "spks": ["0014f9bb48be93eea0bc0ac054ec76bc634ff1474305", "00149d7a17fc4ecec6b181823fd0982eca45ccec3428"], "outspks": ["00144c1afa7614e95b5295d3721010a4452b30261462", "00141d358e6f4655b0c6778f9bbf4ee6fb56d4a4487d"]}, "taproot": {"name": "taproot", "raw": "020000000001022d9eaead07a16d696852885953a9cb6ef08a8b80f9557ccdb7fa4f2e374b2eef0000000000fdffffff58aa7e1c899b6ed6662680cdfebd934b4937e9d1be61de0bc1780ced60de188e0100000000fdffffff02c0270900000000002251208bfdb1b15eafc533639495db1fa2740bb919430a99e2d414c85798f6ec6ea40c38120600000000002251200df2c9164541ffc87e0a36df8832bea068830e5c25c0a46069c7776ac9942b900140441a3cbbaadce70a7b8ed597ee0eaa4144b6ea31b311f9cfe4640531424f12bbf764651f08d1d8c1d1149e270d4a414a1233d8a55ea42d16af9805a7c651a2eb0140c734baf252929fd5409d89c23480d47bea11f866f0c7308bc384de1cd0fbc836d7c9fec1b4572105d76b49e05a46207baf60d2e184927e0ad434802eda44123500000000", "size": 312, "base_size": 178, "weight": 846, "vsize": 212, "fee": 2120, "change": 397880, "txid": "40450d34a937568d390b8c983b639305194cc7350e5267cd23a9dd6c7f8fc3a8", "wtxid": "0e79d17012b73d0db207a38084659b744ec63b1b366e5035da747ddcdcee7f98", "stripped": "02000000022d9eaead07a16d696852885953a9cb6ef08a8b80f9557ccdb7fa4f2e374b2eef0000000000fdffffff58aa7e1c899b6ed6662680cdfebd934b4937e9d1be61de0bc1780ced60de188e0100000000fdffffff02c0270900000000002251208bfdb1b15eafc533639495db1fa2740bb919430a99e2d414c85798f6ec6ea40c38120600000000002251200df2c9164541ffc87e0a36df8832bea068830e5c25c0a46069c7776ac9942b9000000000", "fields": [{"label": "version", "hex": "02000000", "meaning": "s\u00fcr\u00fcm 2", "part": "base", "cls": "meta"}, {"label": "marker", "hex": "00", "meaning": "SegWit i\u015fareti", "part": "wit", "cls": "wit"}, {"label": "flag", "hex": "01", "meaning": "witness var", "part": "wit", "cls": "wit"}, {"label": "input say\u0131s\u0131", "hex": "02", "meaning": "2 input", "part": "base", "cls": "meta"}, {"label": "input #0 \u00b7 \u00f6nceki txid", "hex": "2d9eaead07a16d696852885953a9cb6ef08a8b80f9557ccdb7fa4f2e374b2eef", "meaning": "ters \u00e7evrilmi\u015f: ef2e4b37\u20269e2d", "part": "base", "cls": "in"}, {"label": "input #0 \u00b7 vout", "hex": "00000000", "meaning": "o i\u015flemin 0. \u00e7\u0131kt\u0131s\u0131", "part": "base", "cls": "in"}, {"label": "input #0 \u00b7 scriptSig uzunlu\u011fu", "hex": "00", "meaning": "bo\u015f", "part": "base", "cls": "in"}, {"label": "input #0 \u00b7 sequence", "hex": "fdffffff", "meaning": "fdffffff: RBF a\u00e7\u0131k", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 \u00f6nceki txid", "hex": "58aa7e1c899b6ed6662680cdfebd934b4937e9d1be61de0bc1780ced60de188e", "meaning": "ters \u00e7evrilmi\u015f: 8e18de60\u2026aa58", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 vout", "hex": "01000000", "meaning": "o i\u015flemin 1. \u00e7\u0131kt\u0131s\u0131", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 scriptSig uzunlu\u011fu", "hex": "00", "meaning": "bo\u015f", "part": "base", "cls": "in"}, {"label": "input #1 \u00b7 sequence", "hex": "fdffffff", "meaning": "fdffffff: RBF a\u00e7\u0131k", "part": "base", "cls": "in"}, {"label": "output say\u0131s\u0131", "hex": "02", "meaning": "2 output", "part": "base", "cls": "meta"}, {"label": "output #0 \u00b7 miktar", "hex": "c027090000000000", "meaning": "600 000 sat \u2192 Ay\u015fe", "part": "base", "cls": "out"}, {"label": "output #0 \u00b7 kilit", "hex": "2251208bfdb1b15eafc533639495db1fa2740bb919430a99e2d414c85798f6ec6ea40c", "meaning": "P2TR: OP_1 <32B x-only output key>", "part": "base", "cls": "out"}, {"label": "output #1 \u00b7 miktar", "hex": "3812060000000000", "meaning": "397 880 sat \u2192 para \u00fcst\u00fc", "part": "base", "cls": "out"}, {"label": "output #1 \u00b7 kilit", "hex": "2251200df2c9164541ffc87e0a36df8832bea068830e5c25c0a46069c7776ac9942b90", "meaning": "P2TR: Ali\u2019nin yeni adresi", "part": "base", "cls": "out"}, {"label": "witness #0 \u00b7 \u00f6\u011fe say\u0131s\u0131", "hex": "01", "meaning": "1 \u00f6\u011fe: yaln\u0131z imza", "part": "wit", "cls": "wit"}, {"label": "witness #0 \u00b7 Schnorr imza", "hex": "40441a3cbbaadce70a7b8ed597ee0eaa4144b6ea31b311f9cfe4640531424f12bbf764651f08d1d8c1d1149e270d4a414a1233d8a55ea42d16af9805a7c651a2eb", "meaning": "64 B: R.x (32) + s (32), sighash byte\u2019\u0131 yok", "part": "wit", "cls": "sig"}, {"label": "witness #1 \u00b7 \u00f6\u011fe say\u0131s\u0131", "hex": "01", "meaning": "1 \u00f6\u011fe: yaln\u0131z imza", "part": "wit", "cls": "wit"}, {"label": "witness #1 \u00b7 Schnorr imza", "hex": "40c734baf252929fd5409d89c23480d47bea11f866f0c7308bc384de1cd0fbc836d7c9fec1b4572105d76b49e05a46207baf60d2e184927e0ad434802eda441235", "meaning": "64 B: R.x (32) + s (32), sighash byte\u2019\u0131 yok", "part": "wit", "cls": "sig"}, {"label": "locktime", "hex": "00000000", "meaning": "zaman kilidi yok", "part": "base", "cls": "meta"}], "inputs": [{"index": 0, "preimage": "000002000000000000002f8038bd16445258de30bf49fa309a5f290b63c63e5e94b6b69008d808080357fe6d4fd1b28fd3c88adda403f8b003331ae47a1030da1db15f0a710a682e288b933c402be1a466e42de085d1ff7155aa88c68328ac3ea0aef44a223d09e150da82d397cbbcff87bc5d0c4c70e424f9b830efbad7bf0be479da5d1d1bafdb9798069ec9171443e801a05e1597e16a8faf4e21a888e3b8751bce4331994406827f0000000000", "preimage_len": 175, "parts": [{"name": "epoch", "hex": "00", "kind": "kapsar"}, {"name": "hash_type (00 = DEFAULT, ALL gibi)", "hex": "00", "kind": "kapsar"}, {"name": "nVersion", "hex": "02000000", "kind": "kapsar"}, {"name": "nLockTime", "hex": "00000000", "kind": "kapsar"}, {"name": "sha_prevouts = SHA256(t\u00fcm outpoint\u2019ler)", "hex": "2f8038bd16445258de30bf49fa309a5f290b63c63e5e94b6b69008d808080357", "kind": "kapsar"}, {"name": "sha_amounts = SHA256(T\u00dcM input miktarlar\u0131)", "hex": "fe6d4fd1b28fd3c88adda403f8b003331ae47a1030da1db15f0a710a682e288b", "kind": "yeni"}, {"name": "sha_scriptpubkeys = SHA256(T\u00dcM input kilitleri)", "hex": "933c402be1a466e42de085d1ff7155aa88c68328ac3ea0aef44a223d09e150da", "kind": "yeni"}, {"name": "sha_sequences = SHA256(t\u00fcm sequence\u2019ler)", "hex": "82d397cbbcff87bc5d0c4c70e424f9b830efbad7bf0be479da5d1d1bafdb9798", "kind": "kapsar"}, {"name": "sha_outputs = SHA256(t\u00fcm output\u2019lar)", "hex": "069ec9171443e801a05e1597e16a8faf4e21a888e3b8751bce4331994406827f", "kind": "kapsar"}, {"name": "spend_type (00 = key path, annex yok)", "hex": "00", "kind": "kapsar"}, {"name": "input_index (0)", "hex": "00000000", "kind": "kapsar"}], "hash": "c0053ce68ff533a421eba4f6125c83b76eddabc2405c6b658d70c77d4b0f7797", "hash_rule": "TaggedHash(\"TapSighash\", mesaj)  (BIP341)", "sig": "441a3cbbaadce70a7b8ed597ee0eaa4144b6ea31b311f9cfe4640531424f12bbf764651f08d1d8c1d1149e270d4a414a1233d8a55ea42d16af9805a7c651a2eb", "r": "441a3cbbaadce70a7b8ed597ee0eaa4144b6ea31b311f9cfe4640531424f12bb", "s": "f764651f08d1d8c1d1149e270d4a414a1233d8a55ea42d16af9805a7c651a2eb", "internal": "50af4fcfe9a8575028b87e2225205e86023b9730fdf1e291af7c8b6aed22c6c4", "output_key": "a267c78f35ed644a38c1c55836e5fc5946abea872f77cdf8244c0378b57c97b1", "tweak": "c3c99e482ba77da69e85d66eebfe7896ec68776d841690ba2b5fcad9efb420e5", "amount": 700000, "spk": "5120a267c78f35ed644a38c1c55836e5fc5946abea872f77cdf8244c0378b57c97b1"}, {"index": 1, "preimage": "000002000000000000002f8038bd16445258de30bf49fa309a5f290b63c63e5e94b6b69008d808080357fe6d4fd1b28fd3c88adda403f8b003331ae47a1030da1db15f0a710a682e288b933c402be1a466e42de085d1ff7155aa88c68328ac3ea0aef44a223d09e150da82d397cbbcff87bc5d0c4c70e424f9b830efbad7bf0be479da5d1d1bafdb9798069ec9171443e801a05e1597e16a8faf4e21a888e3b8751bce4331994406827f0001000000", "preimage_len": 175, "parts": [{"name": "epoch", "hex": "00", "kind": "kapsar"}, {"name": "hash_type (00 = DEFAULT, ALL gibi)", "hex": "00", "kind": "kapsar"}, {"name": "nVersion", "hex": "02000000", "kind": "kapsar"}, {"name": "nLockTime", "hex": "00000000", "kind": "kapsar"}, {"name": "sha_prevouts = SHA256(t\u00fcm outpoint\u2019ler)", "hex": "2f8038bd16445258de30bf49fa309a5f290b63c63e5e94b6b69008d808080357", "kind": "kapsar"}, {"name": "sha_amounts = SHA256(T\u00dcM input miktarlar\u0131)", "hex": "fe6d4fd1b28fd3c88adda403f8b003331ae47a1030da1db15f0a710a682e288b", "kind": "yeni"}, {"name": "sha_scriptpubkeys = SHA256(T\u00dcM input kilitleri)", "hex": "933c402be1a466e42de085d1ff7155aa88c68328ac3ea0aef44a223d09e150da", "kind": "yeni"}, {"name": "sha_sequences = SHA256(t\u00fcm sequence\u2019ler)", "hex": "82d397cbbcff87bc5d0c4c70e424f9b830efbad7bf0be479da5d1d1bafdb9798", "kind": "kapsar"}, {"name": "sha_outputs = SHA256(t\u00fcm output\u2019lar)", "hex": "069ec9171443e801a05e1597e16a8faf4e21a888e3b8751bce4331994406827f", "kind": "kapsar"}, {"name": "spend_type (00 = key path, annex yok)", "hex": "00", "kind": "kapsar"}, {"name": "input_index (1)", "hex": "01000000", "kind": "kapsar"}], "hash": "14bad122810ff518a9dcbab7df12fb287dac4a08f0ab930d9509bbca44a152a9", "hash_rule": "TaggedHash(\"TapSighash\", mesaj)  (BIP341)", "sig": "c734baf252929fd5409d89c23480d47bea11f866f0c7308bc384de1cd0fbc836d7c9fec1b4572105d76b49e05a46207baf60d2e184927e0ad434802eda441235", "r": "c734baf252929fd5409d89c23480d47bea11f866f0c7308bc384de1cd0fbc836", "s": "d7c9fec1b4572105d76b49e05a46207baf60d2e184927e0ad434802eda441235", "internal": "aed4205de5d48b70a0c73e829d5c95a1d473ba3e6d95c12a33c94e3e12558cdb", "output_key": "ca6a4b758d264931007b476aa8b88e7b3730a55dcb2418308358f316128be368", "tweak": "57375bc4d0c6421cb085153ce4ca1e5594c3f7cb2eb9f805224dc42141aaf92c", "amount": 300000, "spk": "5120ca6a4b758d264931007b476aa8b88e7b3730a55dcb2418308358f316128be368"}], "prev_display": ["ef2e4b372e4ffab7cd7c55f9808b8af06ecba95359885268696da107adae9e2d", "8e18de60ed0c78c10bde61bed1e937494b93bdfecd802666d66e9b891c7eaa58"], "spks": ["5120a267c78f35ed644a38c1c55836e5fc5946abea872f77cdf8244c0378b57c97b1", "5120ca6a4b758d264931007b476aa8b88e7b3730a55dcb2418308358f316128be368"], "outspks": ["51208bfdb1b15eafc533639495db1fa2740bb919430a99e2d414c85798f6ec6ea40c", "51200df2c9164541ffc87e0a36df8832bea068830e5c25c0a46069c7776ac9942b90"]}, "in_amts": [700000, 300000], "pay": 600000, "feerate": 10, "lie": {"legacy": {"lie0": {"amounts": [70000, 300000], "per_input": [{"hash": "0c91b0cb29f68b6191965d9d15e56db7d29143779287f771d6bc345eef72d387", "changed": false}, {"hash": "8ac23ef365483dbb38106bd90d292c896620e4590362043fb5dc89428d1dbb17", "changed": false}]}, "lie1": {"amounts": [700000, 30000], "per_input": [{"hash": "0c91b0cb29f68b6191965d9d15e56db7d29143779287f771d6bc345eef72d387", "changed": false}, {"hash": "8ac23ef365483dbb38106bd90d292c896620e4590362043fb5dc89428d1dbb17", "changed": false}]}}, "segwit": {"lie0": {"amounts": [70000, 300000], "per_input": [{"hash": "6726996efa9998b8b1e022ab64430cfab201155b7eb6578aa0c47f316670a167", "changed": true}, {"hash": "0654cb2d9d357a93bf5c11f77eb8d0e052c7cbbbaf3511f819583e95b79d894d", "changed": false}]}, "lie1": {"amounts": [700000, 30000], "per_input": [{"hash": "eec4def6735cdb645e570abe0660a37ed4875a440907fa727afc0c73ed229938", "changed": false}, {"hash": "248071598fa56c58d5887cbbace9cd53e9068f26c7b542f506fb4ccf09de15f1", "changed": true}]}}, "taproot": {"lie0": {"amounts": [70000, 300000], "per_input": [{"hash": "c1f1d324786f5e97046e45aef6d42644609fa661125106a44269cacab7a95b2f", "changed": true}, {"hash": "5561d3ccb52688f462f9ae88a5f18917d4326276c9ebef50c433a8689031a2c3", "changed": true}]}, "lie1": {"amounts": [700000, 30000], "per_input": [{"hash": "e39a492f64d76af66eed6478ea3d4faf75b0dbc57f39c925a12d68ceaf7717ab", "changed": true}, {"hash": "d3bbb92e7d4ee0116d5899fa5760f53e53e31f88e0fa994ee22ff746c7a9b6df", "changed": true}]}}}};
const fmt = n => n.toLocaleString('tr-TR').replace(/\./g,' ');
const short = h => h.slice(0,8)+'…'+h.slice(-6);
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
// Zincirden aynı kilit türüyle gerçek örnekler (2 giriş → 2 çıkış; SegWit'te 1 giriş)
const REAL = {
  legacy:  { txid: '2116db9f2a882140f9f21e2002392c7f783d698d6b10ed26c40e4ccac4e3e6a2', label: 'P2PKH' },
  segwit:  { txid: 'b222e767c4f9cd6324b341c6810560e2494721e20f5647ea0e46f81d2f71c12e', label: 'P2WPKH' },
  taproot: { txid: '43f1000106db9e7da4fd8bf8c95ae1947c33df2f925607f85577e3ea3c284e69', label: 'P2TR' }};
const TITLE = {legacy:'Legacy · P2PKH', segwit:'SegWit v0 · P2WPKH (BIP143)', taproot:'Taproot · P2TR key path (BIP341)'};

function bytesOf(hex){return hex.length/2}

function sigBytes(t, inp){
  if(t.name==='taproot'){
    return `<div class="sigbytes">
      <div><small>R.x · 32 B</small><b>${inp.r}</b></div>
      <div><small>s · 32 B</small><b>${inp.s}</b></div></div>
      <p class="where">64 byte, sighash byte'ı yok: DEFAULT demek. Başka bir tip seçilseydi 65. byte olarak eklenirdi. Bu imza <code>${short(inp.output_key)}</code> output key'ine karşı doğrulanır. O key, internal key <code>${short(inp.internal)}</code> artı tweak × G'dir.</p>`;
  }
  const d = inp.der;
  const rl = parseInt(d.slice(6,8),16), rhex = d.slice(8,8+rl*2);
  const sOff = 8+rl*2, sl = parseInt(d.slice(sOff+2,sOff+4),16), shex = d.slice(sOff+4, sOff+4+sl*2);
  return `<div class="sigbytes">
    <div><small>DER</small><b>30</b></div>
    <div><small>uzunluk</small><b>${d.slice(2,4)}</b></div>
    <div><small>tam sayı</small><b>02</b></div>
    <div><small>r boyu</small><b>${d.slice(6,8)}</b></div>
    <div><small>r · ${rl} B</small><b>${rhex}</b></div>
    <div><small>tam sayı</small><b>02</b></div>
    <div><small>s boyu</small><b>${d.slice(sOff+2,sOff+4)}</b></div>
    <div><small>s · ${sl} B</small><b>${shex}</b></div>
    <div><small>sighash</small><b>01</b></div></div>
    <p class="where">${bytesOf(inp.sig)} byte = ${bytesOf(d)} B DER + 1 B sighash. ${t.name==='legacy'
      ? 'Bu imza <b>scriptSig</b> içinde durur. scriptSig txid\'e girdiği için imzanın biçimi değişirse (örneğin s → n−s) txid de değişir.'
      : 'Bu imza <b>witness</b> içinde durur. Witness txid\'e girmez, yalnız wtxid\'e girer. İmzayı değiştirmek txid\'i değiştirmez.'}</p>`;
}

const KIND = {kapsar:'kapsar', yeni:'kapsar · yeni', bos:'boşaltıldı', yerine:'yerine kilit'};
function preimage(inp){
  return `<div class="pre">${inp.parts.map(p=>`<div class="row ${p.kind}${p.hex===''?' empty':''}">
    <span class="n">${esc(p.name)} <span class="muted mono" style="font-size:11px">· ${bytesOf(p.hex)} B</span></span>
    <span class="chip ${p.kind}">${KIND[p.kind]}</span>
    <span class="x">${p.hex}</span></div>`).join('')}</div>`;
}

function coverage(t, i){
  const j = 1-i, me = t.inputs[i], other = t.inputs[j];
  const outs = `${fmt(D.pay)} sat → <code>${short(t.outspks[0])}</code>, ${fmt(t.change)} sat → <code>${short(t.outspks[1])}</code>`;
  const op = k => `<code>${short(t.prev_display[k])}:${k}</code>`;
  if(t.name==='legacy') return {
    yes:[`Sürüm <code>02000000</code> ve locktime <code>00000000</code>`,
      `İki banknotun kimliği: ${op(0)}, ${op(1)} ve sequence'ları <code>fdffffff</code>`,
      `Tüm output'lar, miktar ve kilit birlikte: ${outs}`,
      `Kendi banknotunun kilidi: scriptSig yerine konan <code>${short(me.spk)}</code> (25 B)`,
      `Sighash tipi: mesajın sonunda <code>01000000</code>, imzanın son byte'ı <code>01</code>`],
    no:[`<b>Kendi banknotunun miktarı (${fmt(me.amount)} sat)</b>: mesajda hiçbir yerde yok. İmzacı fee'yi doğrulayamaz; bunun için önceki işlemin tamamını alıp hash'lemesi gerekir.`,
      `Diğer banknotun (input #${j}) miktarı (${fmt(other.amount)} sat) ve kilidi: input #${j}'in scriptSig'i mesajda boşaltılıyor.`,
      `scriptSig'ler, yani imzaların ve public key'lerin kendisi. Hem bu imza hem input #${j}'in imzası mesaj dışında.`,
      `Fee: hiçbir alanda yazmıyor; giriş miktarları da mesajda olmadığı için imzayla bağlanmıyor.`]};
  if(t.name==='segwit') return {
    yes:[`Sürüm, locktime, sighash tipi <code>01000000</code>`,
      `<code>hashPrevouts</code>: ${op(0)} ve ${op(1)} birlikte; <code>hashSequence</code>: iki sequence birlikte`,
      `Kendi outpoint'i ${op(i)} ve sequence'ı ayrıca açık hâliyle`,
      `<code>scriptCode</code>: kendi kilidinin P2PKH karşılığı <code>${short('1976a914'+me.spk.slice(4)+'88ac')}</code>`,
      `<b>Kendi banknotunun miktarı: ${fmt(me.amount)} sat</b>. BIP143 ile gelen yenilik bu.`,
      `<code>hashOutputs</code>: ${outs}`],
    no:[`<b>Diğer banknotun miktarı (${fmt(other.amount)} sat)</b>: onu yalnız input #${j}'in imzası görüyor. 2020'deki çok turlu saldırı bu boşluğu kullanıyor.`,
      `Diğer banknotun kilidi <code>${short(other.spk)}</code>`,
      `Witness: iki imza ve iki public key. Witness txid'e de girmediği için imzanın biçimini değiştirmek txid'i değiştirmiyor.`,
      `Fee'nin tamamı: tek bir imza toplam giriş miktarını bilmiyor.`]};
  return {
    yes:[`<code>epoch 00</code>, <code>hash_type 00</code> (DEFAULT), sürüm, locktime`,
      `<code>sha_prevouts</code> ${op(0)}, ${op(1)} · <code>sha_sequences</code> · <code>sha_outputs</code>: ${outs}`,
      `<b><code>sha_amounts</code>: iki miktar birlikte, ${fmt(D.in_amts[0])} + ${fmt(D.in_amts[1])} sat</b>. Fee artık mesajdan hesaplanabiliyor: 1 000 000 − ${fmt(D.pay)} − ${fmt(t.change)} = ${fmt(t.fee)} sat.`,
      `<b><code>sha_scriptpubkeys</code>: iki kilit birlikte</b>, <code>${short(t.spks[0])}</code> ve <code>${short(t.spks[1])}</code>`,
      `<code>spend_type 00</code> (key path, annex yok) ve <code>input_index ${i}</code>`],
    no:[`Witness: bu imza da diğer input'un imzası da mesaj dışında. Witness txid'e girmiyor.`,
      `Internal key ve tweak doğrudan mesajda yok. Mesajda kilit, yani output key <code>${short(me.output_key)}</code> var; imza o key'e karşı doğrulanıyor.`,
      `Script ağacı: key path'te hiç açılmıyor. Script path harcamasında mesaja <code>tapleaf_hash</code> eklenirdi.`,
      `Annex: bu işlemde yok. Olsaydı <code>sha_annex</code> ile kapsanırdı.`]};
}

function lieTable(t){
  const L = D.lie[t.name];
  const rows = [['lie0', 'Input #0 için 70 000 sat denirse (gerçek: 700 000)'], ['lie1', 'Input #1 için 30 000 sat denirse (gerçek: 300 000)']];
  return `<div class="tablewrap"><table class="lie"><thead><tr><th>Uygulamanın yalanı</th><th>İmza #0 mesajı</th><th>İmza #1 mesajı</th></tr></thead><tbody>
  ${rows.map(([k,lab])=>`<tr><td>${lab}</td>${L[k].per_input.map(r=>`<td class="res ${r.changed?'broke':'same'}">${r.changed?'değişti → imza geçersiz':'aynı'}</td>`).join('')}</tr>`).join('')}
  </tbody></table></div>`;
}
const LIE_TXT = {
  legacy:'Miktar hiçbir mesajda yok. Yalan miktarla atılan imzalar geçerli kalıyor, cihaz farkı hiç anlamıyor. Fee yanlış görünür, para madenciye gider.',
  segwit:'Her imza yalnız kendi miktarını görüyor. Yalan, ancak o input\'un imzasını bozuyor. Saldırgan iki ayrı turda, her seferinde başka bir input için yalan söyleyip doğru imzaları ayrı ayrı toplayabilir.',
  taproot:'Her imza bütün miktarları görüyor. Tek bir yalan iki imzayı birden geçersiz kılıyor.'};

function render(name){
  const t = D[name];
  const witTx = name!=='legacy';
  const hex = t.fields.map((f,k)=>`<span class="${f.cls==='wit'?'witc':f.cls}${f.part==='wit'?' wit':''}" data-k="${k}" title="${esc(f.label)}">${f.hex}</span>`).join('');
  const rows = t.fields.map((f,k)=>`<tr id="r-${k}" data-k="${k}" class="${f.part==='wit'?'witrow':''}"><td class="name"><span class="${f.cls==='wit'?'witc':f.cls}">●</span> ${esc(f.label)}</td><td class="h">${f.hex}</td><td class="b">${bytesOf(f.hex)} B</td><td>${esc(f.meaning)}</td></tr>`).join('');
  const cards = t.inputs.map((inp,i)=>{
    const c = coverage(t,i);
    return `<article class="card">
      <h3>İmza #${i} · input #${i}'in banknotu</h3>
      <div class="utxo">
        <span>Outpoint</span><span>${short(t.prev_display[i])}:${i}</span>
        <span>Miktar</span><span>${fmt(inp.amount)} sat</span>
        <span>Kilit</span><span>${inp.spk}</span>
        ${name==='taproot'?`<span>Internal key</span><span>${inp.internal}</span><span>Tweak t</span><span>${inp.tweak}</span>`:`<span>Public key</span><span>${inp.pub}</span>`}
      </div>
      ${sigBytes(t,inp)}
      <h4 style="margin:0;font-family:var(--f-display);font-size:14px">İmzalanan mesaj · ${inp.preimage_len} byte</h4>
      ${preimage(inp)}
      <div class="hashline"><span class="muted">${esc(inp.hash_rule)} =</span><span class="x">${inp.hash}</span></div>
      <details class="prewrap"><summary>Mesajın tamamı, tek parça hex</summary><div class="x">${inp.preimage}</div></details>
      <div class="cov">
        <div class="yes"><h4>Kapsar</h4><ul>${c.yes.map(x=>`<li>${x}</li>`).join('')}</ul></div>
        <div class="no"><h4>Kapsamaz</h4><ul>${c.no.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      </div>
    </article>`;}).join('');
  const msgNote = {
    legacy:'Legacy\'de mesaj, işlemin kendisinden türetilir. Tüm scriptSig\'ler boşaltılır, yalnız imzalanan input\'un yerine harcadığı banknotun kilidi konur, sona 4 byte sighash tipi eklenir. Bu yüzden her imzanın mesajı ayrıdır ve uzunluğu işlem büyüdükçe büyür. N input\'ta toplam hash işi N² ile artar.',
    segwit:'BIP143 mesajı sabit yapıdadır: ortak parçalar (hashPrevouts, hashSequence, hashOutputs) bir kez hesaplanıp her input\'ta yeniden kullanılır. Böylece kuadratik hash sorunu çözülür. Input\'a özel kısımlar outpoint, scriptCode, miktar ve sequence\'tır.',
    taproot:'BIP341 mesajı tagged hash ile özetlenir. Ortak parçalar tek SHA256\'dır (çift değil). Önceki iki şemadan farkı: tüm input\'ların miktarı ve kilidi her imzaya girer.'}[name];
  document.getElementById('anatMain').innerHTML = `<section class="tx">
    <div class="block">
      <span class="eyebrow">${TITLE[name]}</span>
      <button type="button" class="bridge" data-chain="${REAL[name].txid}">Zincirde gerçek bir ${REAL[name].label} işlemi <b>→</b></button>
      <div class="stats">
        <div class="stat"><span class="k">Ham boyut</span><span class="v">${t.size} B</span></div>
        ${witTx?`<div class="stat"><span class="k">Witness'sız</span><span class="v">${t.base_size} B</span></div>`:''}
        <div class="stat"><span class="k">Weight</span><span class="v">${t.weight} WU</span></div>
        <div class="stat"><span class="k">vsize</span><span class="v">${t.vsize} vB</span></div>
        <div class="stat"><span class="k">Fee</span><span class="v">${fmt(t.fee)} sat</span></div>
        <div class="stat"><span class="k">Para üstü</span><span class="v">${fmt(t.change)} sat</span></div>
        <div class="stat"><span class="k">İmza</span><span class="v">2 × ${name==='taproot'?'64':'71'} B</span></div>
      </div>
      <div class="ids">
        <div><span class="muted">txid</span><span>${t.txid}</span></div>
        <div><span class="muted">wtxid</span><span>${t.wtxid}${witTx?'':' <span class="muted">(witness yok, txid ile aynı)</span>'}</span></div>
      </div>
      <p class="muted" style="font-size:13.5px">${witTx?`Weight = ${t.base_size} × 3 + ${t.size} = ${t.weight} WU; vsize = ⌈${t.weight} / 4⌉ = ${t.vsize}. txid, marker, flag ve witness çıkarılmış ${t.base_size} byte'ın çift SHA256'sıdır.`:`Witness yok: weight = ${t.size} × 4, vsize = boyut. txid, ${t.size} byte'ın tamamının çift SHA256'sıdır ve imzaları da içerir.`}</p>
    </div>
    <div class="block">
      <h2>Ham işlem · ${t.size} byte</h2>
      <div class="legend"><span class="meta"><i></i>çerçeve</span><span class="in"><i></i>input</span><span class="out"><i></i>output</span><span class="sig"><i></i>imza / public key</span>${witTx?'<span class="witc"><i></i>SegWit yapısı (noktalı alt çizgi: witness bölümü, txid\'e girmez)</span>':''}</div>
      <div class="hex" id="hex">${hex}</div>
      <div class="tablewrap"><table><thead><tr><th>Alan</th><th>Hex</th><th>Boyut</th><th>Anlamı</th></tr></thead><tbody id="ftab">${rows}</tbody></table></div>
    </div>
    <div class="block">
      <h2>İki banknot, iki imza</h2>
      <p>${msgNote}</p>
      <div class="sigs">${cards}</div>
    </div>
    <div class="block">
      <h2>Uygulama miktar konusunda yalan söylerse</h2>
      <p>${LIE_TXT[name]}</p>
      ${lieTable(t)}
    </div>
  </section>`;
  const hexEl = document.getElementById('hex'), tab = document.getElementById('ftab');
  const clear = ()=>document.getElementById('anatMain').querySelectorAll('.hl').forEach(e=>e.classList.remove('hl'));
  const mark = k=>{clear(); hexEl.querySelector(`[data-k="${k}"]`)?.classList.add('hl'); document.getElementById('r-'+k)?.classList.add('hl');};
  hexEl.addEventListener('click',e=>{const s=e.target.closest('span[data-k]'); if(!s)return; mark(s.dataset.k); document.getElementById('r-'+s.dataset.k).scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});});
  tab.addEventListener('mouseover',e=>{const r=e.target.closest('tr[data-k]'); if(r) mark(r.dataset.k);});
  document.querySelectorAll('#anatTabs a').forEach(a=>a.setAttribute('aria-current', a.dataset.t===name?'page':'false'));
}

const M = [
 ['Sürüm, locktime','y','y','y'],
 ['Tüm outpoint\'ler (hangi banknotlar harcanıyor)','y','y','y'],
 ['Tüm sequence\'lar','y','y','y'],
 ['Tüm output\'lar (miktar + kilit)','y','y','y'],
 ['Kendi banknotunun kilidi','y','y','y'],
 ['Diğer banknotların kilidi','n','n','y'],
 ['Kendi banknotunun miktarı','n','y','y'],
 ['Diğer banknotların miktarı','n','n','y'],
 ['Input sırası','p:dolaylı','p:outpoint ile','y'],
 ['İmzalar (scriptSig / witness)','n','n','n'],
];
document.getElementById('anatMbody').innerHTML = M.map(r=>`<tr><td>${r[0]}</td>${r.slice(1).map(v=>v==='y'?'<td class="c y">✓</td>':v==='n'?'<td class="c n">✗</td>':`<td class="c p">${v.slice(2)}</td>`).join('')}</tr>`).join('')
 + `<tr><td>Özet fonksiyonu</td><td class="b">SHA256d</td><td class="b">SHA256d</td><td class="b">TaggedHash</td></tr>
    <tr><td>İmza boyutu</td><td class="b">71 B (DER + 01)</td><td class="b">71 B (DER + 01)</td><td class="b">64 B (Schnorr)</td></tr>
    <tr><td>İmza txid'e giriyor mu?</td><td class="c n">evet</td><td class="c y">hayır</td><td class="c y">hayır</td></tr>
    <tr><td>Bu örnekte vsize / fee</td><td class="b">${D.legacy.vsize} vB / ${fmt(D.legacy.fee)}</td><td class="b">${D.segwit.vsize} vB / ${fmt(D.segwit.fee)}</td><td class="b">${D.taproot.vsize} vB / ${fmt(D.taproot.fee)}</td></tr>`;

const H = {"same": {"amount": 500000, "legacy": ["0c91b0cb29f68b6191965d9d15e56db7d29143779287f771d6bc345eef72d387", "63101aa1aba6a1b5061c166a4bd3c9167034280e7f02228cfd56513161e5cb8d"], "segwit": ["d7acc9b1fc6998b91b5d86fae76bd81d75bf7bd361f723bc74d1432ac38bba1d", "ba59d44161fb8d468b159a199c53a03d6d522e617659a15a249fa2f457f3c39c"], "taproot": ["8825fd60c244452df11d1d64367cf0b13631522dad34d74670adedac329661eb", "f8b779c046e6c11cace1b43afd10a6f1eb991044a0f0c2b53914efa66d9ba361"]}, "diff": {"segwit": {"len": 182, "ndiff": 56, "rows": [{"name": "nVersion", "a": "02000000", "b": "02000000", "same": true}, {"name": "hashPrevouts = dSHA256(t\u00fcm outpoint\u2019ler)", "a": "c7b2471ff6eb4c7f4bbeddd91d3f407517ea2f15981cbc91cadd4ef61862fefb", "b": "c7b2471ff6eb4c7f4bbeddd91d3f407517ea2f15981cbc91cadd4ef61862fefb", "same": true}, {"name": "hashSequence = dSHA256(t\u00fcm sequence\u2019ler)", "a": "957879fdce4d8ab885e32ff307d54e75884da52522cc53d3c4fdb60edb69a098", "b": "957879fdce4d8ab885e32ff307d54e75884da52522cc53d3c4fdb60edb69a098", "same": true}, {"name": "outpoint (input #i)", "a": "b5ad77d5556e37d57f3bdc3788f874644ddb1eb80bea89d57a076a8bfeabe14a00000000", "b": "235d56063b532a64cce48fb92746b7e0e5d8f60280565664054fc140b13cb5bd01000000", "same": false}, {"name": "scriptCode (input #i kilidi, P2PKH bi\u00e7iminde)", "a": "1976a914f9bb48be93eea0bc0ac054ec76bc634ff147430588ac", "b": "1976a9149d7a17fc4ecec6b181823fd0982eca45ccec342888ac", "same": false}, {"name": "amount (input #i miktar\u0131)", "a": "60ae0a0000000000", "b": "e093040000000000", "same": false}, {"name": "nSequence (input #i)", "a": "fdffffff", "b": "fdffffff", "same": true}, {"name": "hashOutputs = dSHA256(t\u00fcm output\u2019lar)", "a": "947ed0601b504b63e511da220eec214d824d668326a3304c2034803465995994", "b": "947ed0601b504b63e511da220eec214d824d668326a3304c2034803465995994", "same": true}, {"name": "nLocktime", "a": "00000000", "b": "00000000", "same": true}, {"name": "sighash tipi (4 byte)", "a": "01000000", "b": "01000000", "same": true}]}, "taproot": {"len": 175, "ndiff": 1, "rows": [{"name": "epoch", "a": "00", "b": "00", "same": true}, {"name": "hash_type (00 = DEFAULT, ALL gibi)", "a": "00", "b": "00", "same": true}, {"name": "nVersion", "a": "02000000", "b": "02000000", "same": true}, {"name": "nLockTime", "a": "00000000", "b": "00000000", "same": true}, {"name": "sha_prevouts = SHA256(t\u00fcm outpoint\u2019ler)", "a": "2f8038bd16445258de30bf49fa309a5f290b63c63e5e94b6b69008d808080357", "b": "2f8038bd16445258de30bf49fa309a5f290b63c63e5e94b6b69008d808080357", "same": true}, {"name": "sha_amounts = SHA256(T\u00dcM input miktarlar\u0131)", "a": "fe6d4fd1b28fd3c88adda403f8b003331ae47a1030da1db15f0a710a682e288b", "b": "fe6d4fd1b28fd3c88adda403f8b003331ae47a1030da1db15f0a710a682e288b", "same": true}, {"name": "sha_scriptpubkeys = SHA256(T\u00dcM input kilitleri)", "a": "933c402be1a466e42de085d1ff7155aa88c68328ac3ea0aef44a223d09e150da", "b": "933c402be1a466e42de085d1ff7155aa88c68328ac3ea0aef44a223d09e150da", "same": true}, {"name": "sha_sequences = SHA256(t\u00fcm sequence\u2019ler)", "a": "82d397cbbcff87bc5d0c4c70e424f9b830efbad7bf0be479da5d1d1bafdb9798", "b": "82d397cbbcff87bc5d0c4c70e424f9b830efbad7bf0be479da5d1d1bafdb9798", "same": true}, {"name": "sha_outputs = SHA256(t\u00fcm output\u2019lar)", "a": "069ec9171443e801a05e1597e16a8faf4e21a888e3b8751bce4331994406827f", "b": "069ec9171443e801a05e1597e16a8faf4e21a888e3b8751bce4331994406827f", "same": true}, {"name": "spend_type (00 = key path, annex yok)", "a": "00", "b": "00", "same": true}, {"name": "input_index (i)", "a": "00000000", "b": "01000000", "same": false}]}}, "payjoin": {"amts": [700000, 300000], "bora": 900000, "change": 97880, "fee": 2120, "output_key": "a267c78f35ed644a38c1c55836e5fc5946abea872f77cdf8244c0378b57c97b1", "spk": "5120a267c78f35ed644a38c1c55836e5fc5946abea872f77cdf8244c0378b57c97b1", "bora_spk": "5120e224efbd6e5203efb44f31612cad3e56899c3930a066723efa51808d4d8e27de", "change_spk": "51200df2c9164541ffc87e0a36df8832bea068830e5c25c0a46069c7776ac9942b90", "prev": ["0d7eddd0b988f64bd7c830799e2805313d0d716054c6a8a0fed987a1f1c9dc01", "8b4429d834073d700341267ce7430970ddfe56699dd0d3f44297f30b65faea69"], "parts_real": [{"name": "epoch", "hex": "00"}, {"name": "hash_type", "hex": "00"}, {"name": "nVersion", "hex": "02000000"}, {"name": "nLockTime", "hex": "00000000"}, {"name": "sha_prevouts", "hex": "1336256aad4bce97eeead13409ea6eae35c8280070fdf2cb0bc68d7def72c7a2"}, {"name": "sha_amounts", "hex": "fe6d4fd1b28fd3c88adda403f8b003331ae47a1030da1db15f0a710a682e288b"}, {"name": "sha_scriptpubkeys", "hex": "f37d6246c3b9e1c289a326344b696e8b81adde4be8a681bb39cb01db1c7b3917"}, {"name": "sha_sequences", "hex": "82d397cbbcff87bc5d0c4c70e424f9b830efbad7bf0be479da5d1d1bafdb9798"}, {"name": "sha_outputs", "hex": "87ea447ebfd576ec107e5bcd87f074cec1604a31cbec763bce611961344ee8ed"}, {"name": "spend_type", "hex": "00"}, {"name": "input_index", "hex": "00000000"}], "idx1": "01000000", "m0": "968154a457e152df22e3da2d2c33b33da031ec2a294a3e6dc06fe2ada288318a", "m1": "29eb6e98bc3d4d9f3d75c9bd449993a4c95510766eae25e5658d7577683487d6", "mn": "78bbcb7777d5a785db711bc632dd911ed61bf891c8e55d914fe5763d600006fe", "sig_real0": "39154a3735852315b06898209fef665f179204008b2f32361bcef17323cc0b72b864a3428eef85adacd08e07fe82db761f57662902dcdf326aa0d5926e9bd2f4", "sig_real1": "485a0fdef9de64adae0824e11ee64dbf1e2815cd8727f2719839f69f30560425fe81b0d9a2e559a2b675b4c68b3d9d042411638c7fa4c660bc6eeccef35c872d", "sig_hyp": "aed791578bfe5a08bff82e08af076cb216f58a8aef2ae82f845a03ad4e58df217540c54fadc404524b97a2ff930d1b9b70cdadf67df7a15af3295072616e820a", "raw_attack_real": "0200000000010201dcc9f1a187d9fea0a8c65460710d3d3105289e7930c8d74bf688b9d0dd7e0d0000000000fdffffff69eafa650bf39742f4d3d09d6956fedd700943e77c264103703d0734d829448b0100000000fdffffff02a0bb0d0000000000225120e224efbd6e5203efb44f31612cad3e56899c3930a066723efa51808d4d8e27de587e0100000000002251200df2c9164541ffc87e0a36df8832bea068830e5c25c0a46069c7776ac9942b90014039154a3735852315b06898209fef665f179204008b2f32361bcef17323cc0b72b864a3428eef85adacd08e07fe82db761f57662902dcdf326aa0d5926e9bd2f4014039154a3735852315b06898209fef665f179204008b2f32361bcef17323cc0b72b864a3428eef85adacd08e07fe82db761f57662902dcdf326aa0d5926e9bd2f400000000", "raw_attack_hyp": "0200000000010201dcc9f1a187d9fea0a8c65460710d3d3105289e7930c8d74bf688b9d0dd7e0d0000000000fdffffff69eafa650bf39742f4d3d09d6956fedd700943e77c264103703d0734d829448b0100000000fdffffff02a0bb0d0000000000225120e224efbd6e5203efb44f31612cad3e56899c3930a066723efa51808d4d8e27de587e0100000000002251200df2c9164541ffc87e0a36df8832bea068830e5c25c0a46069c7776ac9942b900140aed791578bfe5a08bff82e08af076cb216f58a8aef2ae82f845a03ad4e58df217540c54fadc404524b97a2ff930d1b9b70cdadf67df7a15af3295072616e820a0140aed791578bfe5a08bff82e08af076cb216f58a8aef2ae82f845a03ad4e58df217540c54fadc404524b97a2ff930d1b9b70cdadf67df7a15af3295072616e820a00000000", "checks": {"real_on_0": true, "real_on_1": false, "hyp_on_0": true, "hyp_on_1": true, "honest_1": true}}, "single": {"msg": "0100000000000000000000000000000000000000000000000000000000000000", "der": "3044022034564de84c354808cc73af70b0ef31f359a9d36de6ef9848d5f3f2d14684952302206982b08277b1c6a172e47e963e75812374e6d249ef50060d27f4c4ed4d030e4b", "sig": "3044022034564de84c354808cc73af70b0ef31f359a9d36de6ef9848d5f3f2d14684952302206982b08277b1c6a172e47e963e75812374e6d249ef50060d27f4c4ed4d030e4b03", "pub": "0250071bd79eb885ccb37808834aabbe29f74cf8b0a999be1e71f5ba34a91fbd49", "ok": true}};
let hiMode = 'real';
function renderHI(){
  const S=H.same, PJ=H.payjoin, SG=H.single;
  const sameRow=(lab,a)=>`<tr><td>${lab}</td><td class="d">${short(a[0])}</td><td class="d">${short(a[1])}</td><td class="res ${a[0]===a[1]?'broke':'same'}" style="font-family:var(--f-mono);font-weight:700;color:var(--ok)">${a[0]===a[1]?'AYNI':'farklı'}</td></tr>`;
  const diffTable=(dd,label)=>`<div class="tablewrap"><table><thead><tr><th>${label} mesajındaki alan</th><th>input #0</th><th>input #1</th></tr></thead><tbody>
    ${dd.rows.map(r=>`<tr class="${r.same?'sameRow':'differ'}"><td>${esc(r.name)}${r.same?'':' <span class="chip yeni">farklı</span>'}</td><td class="d">${r.same?short(r.a):r.a}</td><td class="d">${r.same?short(r.b):r.b}</td></tr>`).join('')}
  </tbody></table></div>`;
  const real = hiMode==='real';
  const parts = PJ.parts_real.map(p=>`<div class="row${p.name==='input_index'?' idx':''}${p.name==='input_index'&&!real?' gone':''}"><span class="n">${esc(p.name)} <span class="muted mono" style="font-size:11px">· ${bytesOf(p.hex)} B</span></span><span class="chip ${p.name==='input_index'?'yeni':'kapsar'}">${p.name==='input_index'?(real?'#0 → 00000000':'yok'):'ortak'}</span><span class="x">${p.name==='input_index'?(real?p.hex+'  (input #1 için: '+PJ.idx1+')':'—'):p.hex}</span></div>`).join('');
  const m0 = real?PJ.m0:PJ.mn, m1 = real?PJ.m1:PJ.mn, sig = real?PJ.sig_real0:PJ.sig_hyp;
  const ok1 = real?PJ.checks.real_on_1:PJ.checks.hyp_on_1;
  const raw = real?PJ.raw_attack_real:PJ.raw_attack_hyp;
  const wi = raw.length-8-264; // witness başlangıcı: 2 × (01 40 + 64 B) = 264 hex, ardından locktime
  const w0 = raw.slice(wi, wi+132), w1 = raw.slice(wi+132, wi+264);
  const rawHtml = `${raw.slice(0,wi)}<span class="w0">${w0}</span><span class="w1">${w1}</span>${raw.slice(wi+264)}`;
  const aliOut = PJ.amts[0]-PJ.change, realOut = PJ.amts[0]+PJ.amts[1]-PJ.change;
  document.getElementById('anatMain').innerHTML = `<section class="tx">

  <div class="block">
    <span class="eyebrow">1 · Deney</span>
    <h2>Aynı anahtar, aynı miktar: iki imza aynı mı çıkar?</h2>
    <p>Üç işlemde de iki input'u aynı kilide bağladım ve iki miktarı da ${fmt(S.amount)} sat yaptım. Anahtar, kilit ve miktar artık birebir aynı. Yine de her şemada iki input'un imzaladığı mesaj farklı:</p>
    <div class="tablewrap"><table><thead><tr><th>Şema</th><th>input #0 mesaj hash'i</th><th>input #1 mesaj hash'i</th><th>Sonuç</th></tr></thead><tbody>
      ${sameRow('Legacy · ALL',S.legacy)}${sameRow('SegWit v0 · ALL',S.segwit)}${sameRow('Taproot · DEFAULT',S.taproot)}
    </tbody></table></div>
    <p>Mesaj farklıysa hash de farklı. Nonce (ECDSA'da RFC6979, Schnorr'da BIP340) anahtar ve mesajdan türetildiği için o da farklı çıkıyor. Sonuçta iki imza tamamen farklı oluyor. Peki her şema iki input'u neye bakarak ayırt ediyor?</p>
  </div>

  <div class="block">
    <span class="eyebrow">2 · Ayırt edici bilgi</span>
    <h2>Her şema imzalanan input'u başka bir yolla işaretliyor</h2>
    <div class="three">
      <article class="card"><h3>Legacy · yuvanın yeri</h3><p>İşlemin tamamı mesaja giriyor. Kilit yalnız imzalanan input'un scriptSig yuvasına konuyor, diğer yuvalar boşaltılıyor. Input #0 için mesaj "dolu, boş", input #1 için "boş, dolu". Index ayrıca yazılmıyor; yapının içinde dolaylı olarak duruyor.</p></article>
      <article class="card"><h3>SegWit v0 · kendi outpoint'i</h3><div class="bigfig">${H.diff.segwit.ndiff}<small> / ${H.diff.segwit.len} byte farklı</small></div><p>Miktar ve scriptCode yalnız imzalanan input için yazılıyor. Yanlarına o input'un outpoint'i de konmuş. Outpoint zincirde tekil olduğu için input'u kesin tanımlıyor.</p></article>
      <article class="card"><h3>Taproot · input_index</h3><div class="bigfig">${H.diff.taproot.ndiff}<small> / ${H.diff.taproot.len} byte farklı</small></div><p>Miktarlar, kilitler, outpoint'ler ve sequence'lar her input için birlikte imzalanıyor, yani her input'ta aynılar. Geriye tek ayırt edici alan kalıyor: 4 byte'lık <code>input_index</code>.</p></article>
    </div>
    <p class="muted">Örnek işlemlerimizde iki input'un mesajları alan alan şöyle (sarı satırlar farklı olanlar):</p>
    ${diffTable(H.diff.segwit,'SegWit v0')}
    ${diffTable(H.diff.taproot,'Taproot')}
  </div>

  <div class="block">
    <span class="eyebrow">3 · Neden yalnız Taproot'ta?</span>
    <h2>"Her şeyi herkes için imzala" tasarımının doğal sonucu</h2>
    <p>Taproot'ta miktarlar, kilitler, outpoint'ler ve sequence'lar tüm input'lar için birlikte imzalanıyor (<code>sha_amounts</code>, <code>sha_scriptpubkeys</code>, <code>sha_prevouts</code>, <code>sha_sequences</code>). Bu hash'ler işlemin genelini kapsadığı için her input'ta aynı. Kendi input'unun outpoint'ini, miktarını ve kilidini ayrıca yazmak gereksiz tekrar olurdu, çünkü hepsi zaten bu hash'lerin içinde. Geriye tek soru kalıyor: "Bu listedeki hangisi benim?" Cevap 4 byte: 36 B outpoint + 8 B miktar + 35 B kilit + 4 B sequence yerine.</p>
    <ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;max-width:72ch">
      <li><b>Hız:</b> sha_* hash'leri işlem başına bir kez hesaplanıyor. Her input için yalnız birkaç byte değişiyor, mesajın boyu sabit kalıyor.</li>
      <li><b>ANYONECANPAY istisnası:</b> Bu modda diğer input'lar mesaja girmiyor, ortak hash'ler kullanılamıyor. BIP341 o zaman index yerine kendi outpoint'ini, miktarını, kilidini ve sequence'ını açıkça yazıyor. Başkaları input ekleyebildiği ve sıra değişebildiği için index'e güvenilemiyor.</li>
    </ul>
  </div>

  <div class="block">
    <span class="eyebrow">4 · Ayırt edemezsek</span>
    <h2>İmza kopyalama: ortak işlemde aynı adresteki iki banknot</h2>
    <p>Index'i mesajdan çıkarırsak Taproot'ta bütün input'lar aynı mesajı imzalar. Input'lar farklı anahtarlara kilitliyse sorun yok, A'nın imzası B'nin anahtarıyla doğrulanmaz. Ama input'lar <b>aynı anahtara</b> kilitliyse (adres tekrar kullanımı), input #0 için atılan imza input #1'in witness'ına aynen kopyalanıp geçerli sayılabilir. Aşağıdaki işlem gerçek imzalarla kuruldu, sonuçların hepsi libsecp256k1 ile doğrulandı.</p>
    <ol class="steps">
      <li><b>Ali, Bora'ya 600 000 sat ödüyor.</b> Ali'nin aynı adreste iki banknotu var: 700 000 ve 300 000 sat.</li>
      <li><b>Bora'nın koordinatör sunucusu işleme bir input ekliyor</b> ve "input #1 benim, 300 000 sat" diyor. Gerçekte input #1, Ali'nin 300 000 sat'lık banknotu.</li>
      <li><b>Ali'nin cüzdanı yalnız input #0'ı imzalıyor.</b> Yabancı görünen input'ları kendi anahtarlarıyla karşılaştırmadığı için Ali'nin katkısını 700 000 sat olarak gösteriyor.</li>
      <li><b>Bora imzayı input #1'e kopyalıyor</b> ve işlemi ağa gönderiyor. Node her iki imzayı da doğruluyor.</li>
    </ol>
    <div class="note" style="max-width:72ch"><b>Cüzdan bunu fark edemez mi?</b> Edebilir. Taproot'ta input #1'in miktarı ve kilidi imza mesajında var (<code>sha_amounts</code>, <code>sha_scriptpubkeys</code>), yani cüzdan bu verileri görüyor. Input #1'in kilidi input #0'ınkiyle byte byte aynı. Dikkatli bir cüzdan bunu yakalar. Mesajda banknotların <i>verisi</i> var ama <i>sahibi</i> yok; bir kilidin kime ait olduğunu cüzdanın kendisi çıkarmak zorunda. <code>input_index</code> bu kontrolü yapmayan cüzdanları da korur, çünkü kopyalanan imza matematiksel olarak geçersiz olur.</div>

    <div class="seg" role="group" aria-label="İmza kuralı">
      <button type="button" id="mode-real" aria-pressed="${real}">Gerçek kural · BIP341 (input_index var)</button>
      <button type="button" id="mode-hyp" aria-pressed="${!real}">Hayali kural · input_index yok</button>
    </div>

    <div class="demo">
      <div class="screen">
        <div class="bar"><span>Ali'nin donanım cüzdanı</span><span>Adım 3</span></div>
        <dl>
          <dt>Senin banknotun (input #0)</dt><dd>${fmt(PJ.amts[0])}</dd>
          <dt>Yabancı input #1 (Bora)</dt><dd>${fmt(PJ.amts[1])}</dd>
          <dt>→ Bora (output #0)</dt><dd>${fmt(PJ.bora)}</dd>
          <dt>← Sana dönen (output #1)</dt><dd>${fmt(PJ.change)}</dd>
          <dt>Fee</dt><dd>${fmt(PJ.fee)}</dd>
          <dt class="tot">Cebinden çıkan</dt><dd class="tot">${fmt(aliOut)} sat</dd>
        </dl>
        <div class="btn">Onayla ve input #0'ı imzala</div>
      </div>
      <div class="screen reality">
        <div class="bar"><span>Zincirde gerçekte olan</span><span>${real?'kopya reddedilir':'kopya kabul edilir'}</span></div>
        <dl>
          <dt>Ali'nin banknotu (input #0)</dt><dd>${fmt(PJ.amts[0])}</dd>
          <dt class="${real?'':'bad'}">Ali'nin banknotu (input #1)</dt><dd class="${real?'':'bad'}">${fmt(PJ.amts[1])}</dd>
          <dt>→ Bora (output #0)</dt><dd>${fmt(PJ.bora)}</dd>
          <dt>← Ali'ye dönen (output #1)</dt><dd>${fmt(PJ.change)}</dd>
          <dt>Fee</dt><dd>${fmt(PJ.fee)}</dd>
          <dt class="tot ${real?'':'bad'}">Ali'nin cebinden çıkan</dt><dd class="tot ${real?'':'bad'}">${real?'işlem geçersiz, 0':fmt(realOut)+' sat'}</dd>
        </dl>
        <p class="where" style="margin:0">${real?'Kopyalanan imza input #1\'in mesajına uymuyor. Bora, Ali\'nin ikinci banknotunu harcayamıyor. İşlemin geçerli olması için Ali\'nin input #1\'i de bilerek, ayrıca imzalaması gerekir.':'Ali\'nin ekranında katkı 700 000 sat görünüyordu, gerçekte '+fmt(PJ.amts[0]+PJ.amts[1])+' sat. Cebinden '+fmt(realOut-aliOut)+' sat fazla çıktı ve bunu Bora aldı.'}</p>
      </div>
    </div>

    <div class="verdict ${real?'good':'bad'}">
      <span class="head">${real?'Kopya imza GEÇERSİZ':'Kopya imza GEÇERLİ'}</span>
      <div class="kv">
        <span>input #0 mesajı</span><span>${m0}</span>
        <span>input #1 mesajı</span><span>${m1}</span>
        <span>İki mesaj</span><span class="${m0===m1?'eq':'ne'}">${m0===m1?'AYNI: bir imza ikisine de uyar':'FARKLI: yalnız input_index byte\'ı değişti'}</span>
        <span>Ali'nin imzası (input #0)</span><span>${sig}</span>
        <span>input #0'da doğrulama</span><span class="ne">geçerli</span>
        <span>input #1'e kopyalayınca</span><span class="${ok1?'eq':'ne'}">${ok1?'geçerli (libsecp256k1: true)':'geçersiz (libsecp256k1: false)'}</span>
      </div>
    </div>

    <h3>İmzalanan mesaj · ${real?'175':'171'} byte</h3>
    ${'<div class="pre">'+parts+'</div>'}
    <p class="muted" style="font-size:13.5px">${real?'Mesajdaki 11 alanın 10\'u iki input için de aynı, yalnız son 4 byte farklı. İki mesajın hash\'i bu yüzden ayrı.':'input_index çıkınca kalan 10 alan iki input için de aynı. İki mesajın hash\'i de birebir aynı oluyor.'}</p>

    <h3>Bora'nın yayınladığı işlem · witness'lar</h3>
    <div class="hexmini">${rawHtml}</div>
    <div class="legend"><span><i style="background:var(--c-sig)"></i>input #0 witness: Ali'nin imzası</span><span><i style="background:var(--bad)"></i>input #1 witness: aynı 64 byte'ın kopyası</span></div>
  </div>

  <div class="block">
    <span class="eyebrow">5 · SIGHASH_NONE</span>
    <h2>Output'lar imzalanmıyorsa daha da kötü</h2>
    <p>NONE output'ları imzalamaz. İmzacı "bu banknotumu kime giderse gitsin harcayın" demiş olur. Index olmasaydı, tek bir banknot için verilen bu açık çek aynı anahtardaki diğer banknotlar için de geçerli olurdu. Output'ları istediği gibi yazabilen biri hepsini kendine yönlendirebilirdi.</p>
  </div>

  <div class="block">
    <span class="eyebrow">6 · Gerçekte yaşandı</span>
    <h2>Legacy SIGHASH_SINGLE hatası: mesaj hep aynı</h2>
    <p>Legacy'de SINGLE ile imzalanan input'un sırasında bir output yoksa (2 input, 1 output, input #1 için), Bitcoin Core işlemi hash'lemiyor. İmzalanan mesaj olarak sabit <code>0100…00</code> değerini kullanıyor. Bu mesaj hangi input olduğunu ayırt etmiyor, hatta hangi işlem olduğunu da. Aşağıdaki imza bu sabit mesaja atıldı ve geçerli. Aynı anahtara kilitli, aynı koşuldaki her input'ta da geçerli olur.</p>
    <div class="kv">
      <span>İmzalanan mesaj</span><span>${SG.msg}</span>
      <span>Public key</span><span>${SG.pub}</span>
      <span>İmza (DER + 03)</span><span>${SG.sig}</span>
      <span>Doğrulama</span><span class="eq">${SG.ok?'geçerli (libsecp256k1: true): herhangi bir işlemde':'—'}</span>
    </div>
    <p>BIP143'te bu durumda output kısmı sıfırlarla dolduruluyor. BIP341'de ise imza tamamen geçersiz sayılıyor.</p>
  </div>

  <div class="block">
    <span class="eyebrow">Sonuç</span>
    <p class="callout">İmzalanan mesaj, onaylanan şeyi tek başına ve kesin olarak tanımlamalıdır. Mesaj iki farklı şeye aynı anda uyuyorsa, imza ikisine de onay vermiş sayılır. İmzacı bunlardan yalnız birini görmüş olsa bile.</p>
    <p><b>"İmzacı, ancak ona verilen bilgi kadar bilir."</b> Ayırt edici bilgi mesajda yoksa, imzacının ekranda gördüğü ile imzanın gerçekte onayladığı şey birbirinden ayrılır.</p>
    <p class="note">Adres tekrar kullanımı imzayı bozmuyor ama gizliliği bozuyor: zincirde iki banknotun aynı kişiye ait olduğu açıkça görünüyor. Index'i bilerek mesajdan çıkaran bir öneri de var: SIGHASH_ANYPREVOUT (BIP118, henüz aktif değil). Amacı, Lightning'deki eltoo gibi yapılarda imzayı başka banknotlara yeniden bağlayabilmek. Bu yüzden ayrı bir sighash tipi olarak tasarlandı ve normal cüzdanlarda varsayılan olarak kullanılmaması öngörülüyor.</p>
  </div>
  </section>`;
  document.getElementById('mode-real').onclick=()=>{hiMode='real';renderHI();document.getElementById('mode-real').focus();};
  document.getElementById('mode-hyp').onclick=()=>{hiMode='hyp';renderHI();document.getElementById('mode-hyp').focus();};
}

let flowMode = 'hyp';
const LANES = [
  {name:"Ali'nin donanım cüzdanı", sub:'imzacı · internetsiz', cls:'ln0'},
  {name:"Ali'nin cüzdan uygulaması", sub:'telefon / bilgisayar', cls:'ln1'},
  {name:"Bora'nın koordinatör sunucusu", sub:'dolandırıcı', cls:'ln2'},
  {name:'Bitcoin ağı', sub:'node\'lar · mempool · madenciler', cls:'ln3'}];
function renderFlow(){
  const PJ=H.payjoin, hyp = flowMode==='hyp';
  const op0 = short(PJ.prev[0])+':0', op1 = short(PJ.prev[1])+':1', lock = short(PJ.spk);
  const sig = hyp?PJ.sig_hyp:PJ.sig_real0;
  // ---- sıra diyagramı ----
  const rows = [
    [1,'a',1,2,'taslak PSBT (imzasız)'],
    [2,'a',2,3,'Ali\'nin kilidini sorgula (salt okuma)','dash'],
    [2,'a',3,2,'aynı kilitte 300 000 sat\'lık 2. UTXO','dash'],
    [3,'s',2,2,'input #1 ekle · output #0 → 900 000'],
    [3,'a',2,1,'değiştirilmiş PSBT (imzasız)'],
    [4,'s',1,1,'kontrol: #1\'in kilidine bakmıyor','warn'],
    [4,'a',1,0,'PSBT: "input #0\'ı imzala"'],
    [5,'s',0,0,'ekran: 600 000 → Bora · onay','warn'],
    [5,'a',0,1,'PSBT + input #0 imzası (64 B)'],
    [6,'a',1,2,'kısmen imzalı PSBT'],
    [7,'s',2,2,'imzayı #1\'e kopyala · finalize'],
    [8,'a',2,3,'ham işlem (yayın)'],
    [9,'s',3,3,hyp?'doğrula: ✓ kabul → mempool':'doğrula: input #1 ✗ RED', hyp?'bad':'good'],
    [10,'s',3,3,hyp?'madenci: bloğa ekler':'blok yok', hyp?'':'off'],
    [11,'a',3,1,hyp?'bakiye: yalnız 97 880 kaldı':'işlem zincirde yok, bakiye aynı','dash'+(hyp?' bad':'')]];
  const W=960, X=i=>165+i*215, top=78, RH=40, Hh=top+rows.length*RH+24;
  let svg=`<svg viewBox="0 0 ${W} ${Hh}" width="${W}" height="${Hh}" role="img" aria-label="Dolandırıcılığın sıra diyagramı" class="seq">
  <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" class="ahp"/></marker></defs>`;
  LANES.forEach((l,i)=>{svg+=`<g class="${l.cls}"><rect x="${X(i)-100}" y="8" width="200" height="46" rx="8" class="lanehead"/><text x="${X(i)}" y="28" text-anchor="middle" class="lt">${esc(l.name)}</text><text x="${X(i)}" y="44" text-anchor="middle" class="ls">${esc(l.sub)}</text><line x1="${X(i)}" y1="54" x2="${X(i)}" y2="${Hh-8}" class="life"/></g>`;});
  rows.forEach((r,k)=>{
    const [n,t,a,b,lab,fl='']=r; const y=top+k*RH+RH/2;
    svg+=`<g class="row ${fl}" data-step="${n}" tabindex="0">`;
    svg+=`<circle cx="22" cy="${y}" r="11" class="num"/><text x="22" y="${y+4}" text-anchor="middle" class="numt">${n}</text>`;
    if(t==='a'){
      const x1=X(a)+(b>a?4:-4), x2=X(b)+(b>a?-6:6);
      svg+=`<line x1="${x1}" y1="${y+6}" x2="${x2}" y2="${y+6}" class="arr${fl.includes('dash')?' dashed':''}" marker-end="url(#ah)"/><text x="${(X(a)+X(b))/2}" y="${y-1}" text-anchor="middle" class="al">${esc(lab)}</text>`;
    } else {
      svg+=`<rect x="${X(a)-105}" y="${y-13}" width="210" height="26" rx="6" class="selfbox"/><text x="${X(a)}" y="${y+4}" text-anchor="middle" class="sl">${esc(lab)}</text>`;
    }
    svg+='</g>';
  });
  svg+='</svg>';

  // ---- adım ayrıntıları ----
  const step=(n,lane,title,body,extra='')=>`<article class="fstep ${LANES[lane].cls}" id="fstep-${n}">
    <div class="fhead"><span class="fnum">${n}</span><div><span class="who">${esc(LANES[lane].name)}</span><h3>${title}</h3></div></div>
    <div class="fbody">${body}${extra}</div></article>`;
  const carry=(state,html)=>`<div class="carry"><span class="cstate">${state}</span>${html}</div>`;
  const knows=list=>`<ul class="knows">${list.map(x=>`<li>${x}</li>`).join('')}</ul>`;
  const check=(kind,txt)=>`<div class="fcheck ${kind}"><b>${kind==='weak'?'Zayıf nokta':kind==='stop'?'Burada durur':'Kontrol noktası'}:</b> ${txt}</div>`;
  const psbt=(ins,outs)=>`<div class="psbt"><div class="pcol"><span class="ph">Input'lar</span>${ins.map(x=>`<div class="pi">${x}</div>`).join('')}</div><div class="pcol"><span class="ph">Output'lar</span>${outs.map(x=>`<div class="pi">${x}</div>`).join('')}</div></div>`;
  const in0=(s)=>`<b>#0</b> ${op0} · ${fmt(PJ.amts[0])} sat · kilit <code>${lock}</code> · <span class="tagA">Ali</span>${s?` · <span class="sigok">imza ✓</span>`:''}`;
  const in1=(s,c)=>`<b>#1</b> ${op1} · ${fmt(PJ.amts[1])} sat · kilit <code>${lock}</code> · <span class="tagB">"Bora'nın"</span> <span class="tagA">gerçekte Ali</span>${c?` · <span class="sigcopy">kopya imza</span>`:''}${s?'':''}`;
  const outB=v=>`<b>#0</b> ${fmt(v)} sat → Bora`, outA=`<b>#1</b> ${fmt(PJ.change)} sat → Ali (para üstü)`;

  const steps = [
   step(1,1,'Ali\'nin uygulaması ortak işlemi başlatır',
     `<p>Ali, Bora'nın sitesinden 600 000 sat'lık bir ürün alıyor. Site, ödemeyi "ortak işlem" ile yapmayı öneriyor ve gizlilik için daha iyi olduğunu söylüyor. Ali'nin uygulaması banknotlarından birini (700 000) seçer, taslak bir PSBT kurar ve HTTPS ile Bora'nın sunucusuna gönderir. Ağa henüz hiçbir şey gitmedi.</p>`,
     carry('Taslak PSBT · imzasız', psbt([in0(false)],[outB(600000), outA])) + knows([`Bora artık Ali'nin input #0'ının kilidini, yani adresini biliyor: <code>${lock}</code>`]))
  ,step(2,2,'Bora zinciri tarar',
     `<p>Bora'nın sunucusu bu kilidi herkese açık zincirde sorgular. Bunun için kendi node'unu ya da herhangi bir explorer'ı kullanabilir. Bu bir okuma işlemi, ağa hiçbir şey gönderilmiyor. Aynı kilitte ikinci bir harcanmamış banknot bulur: <code>${op1}</code> · ${fmt(PJ.amts[1])} sat.</p>`,
     knows(['Bunun mümkün olmasının sebebi adres tekrar kullanımı. Ali her banknotu farklı bir adrese alsaydı Bora ikinci banknotu bulamazdı.']))
  ,step(3,2,'Bora işlemi değiştirir ve geri gönderir',
     `<p>Ali'nin 300 000 sat'lık banknotunu input #1 olarak ekler ve "bu benim katkım" der. Output #0'ı 900 000'e çıkarır: "600 000 ödeme, artı kendi 300 000'imi geri alıyorum." Ali'nin para üstü (${fmt(PJ.change)}) ve fee (${fmt(PJ.fee)}) değişmez. Input #1'i imzalamaz; "imzalarımı en sonda birlikte ekleyeceğim" der.</p>`,
     carry('PSBT · imzasız', psbt([in0(false), in1(false,false)],[outB(PJ.bora), outA])))
  ,step(4,1,'Ali\'nin uygulaması kontrol eder ve imzacıya yollar',
     `<p>Uygulama kendi input'unu (#0) ve kendi para üstünü (output #1) tanır. Ali'nin net çıkışını hesaplar: 700 000 − ${fmt(PJ.change)} = ${fmt(PJ.amts[0]-PJ.change)} sat, yani 600 000 ödeme + ${fmt(PJ.fee)} fee. Tutarlı görünüyor. PSBT'yi USB veya QR ile donanım cüzdanına yollar ve "input #0'ı imzala" der.</p>`,
     check('weak', `Uygulama input #1'in kilidini Ali'nin adresleriyle karşılaştırmıyor. Karşılaştırsaydı kilidin input #0'ınkiyle aynı olduğunu görür ve "input #1 de senin" diye dururdu.`))
  ,step(5,0,'Donanım cüzdanı imzalar',
     `<p>Private key cihazdan hiç çıkmaz. Cihaz imza mesajını kendisi hesaplar: <code>sha_amounts</code> (700 000 + 300 000), <code>sha_scriptpubkeys</code> (iki kilit), output'lar${hyp?'':', <code>input_index 0</code>'}. Ekranda "600 000 → Bora · para üstü ${fmt(PJ.change)} · fee ${fmt(PJ.fee)}" yazar. Ali butona basar. Cihaz input #0 için 64 byte'lık Schnorr imzayı PSBT'ye ekler.</p>`,
     `<div class="kv"><span>input #0 imzası</span><span>${sig}</span></div>` + check('weak', 'Cihaz da iki kilidi görüyor ama yalnız kendisine sorulan input\'u düşünüyor. Ekrandaki her bilgi doğru, sadece eksik: "input #1 de senin anahtarınla kilitli" demiyor.'))
  ,step(6,1,'İmza koordinatöre gider',
     `<p>Ortak işlemde imzaları toplayıp işlemi tamamlayan taraf koordinatördür. Uygulama, Ali'nin imzasını içeren PSBT'yi Bora'nın sunucusuna gönderir. Bu noktadan sonra Ali'nin elinde kontrol kalmıyor.</p>`,
     carry('Kısmen imzalı PSBT', psbt([in0(true), in1(false,false)],[outB(PJ.bora), outA])))
  ,step(7,2,'Bora imzayı kopyalar',
     `<p>Bora input #1 için imza üretemez, çünkü private key'i yok. Ama input #0'daki 64 byte'ı alıp input #1'in witness'ına aynen yazar. Ardından PSBT'yi sonlandırır (finalize) ve ham işlem hazır olur.</p>`,
     carry('Ham işlem · yayına hazır', psbt([in0(true), in1(false,true)],[outB(PJ.bora), outA])) + `<div class="hexmini"><span class="muted">witness #0 </span><span class="w0">${sig}</span><br><span class="muted">witness #1 </span><span class="w1">${sig}</span></div>`)
  ,step(8,2,'Bora işlemi ağa yayınlar',
     `<p>İşlemi herhangi bir node'a gönderir. Kendi node'u olması gerekmez; bir explorer'ın "işlem yayınla" sayfası bile yeter. Node'lar işlemi kimin gönderdiğini bilmez ve önemsemez.</p>`)
  ,step(9,3,'Node\'lar doğrular',
     `<p>Her node bağımsız olarak kontrol eder:</p><ul class="knows">
       <li>İki UTXO var ve harcanmamış ✓</li><li>Giriş 1 000 000 ≥ çıkış ${fmt(PJ.bora+PJ.change)} ✓ (fee ${fmt(PJ.fee)})</li><li>Input #0 imzası ✓</li>
       <li>Input #1 imzası: ${hyp
         ?`input_index olmadığı için mesaj iki input'ta da aynı (<code>${short(PJ.mn)}</code>). Kopya imza bu mesaja uyuyor: <b class="badtxt">✓ KABUL</b>`
         :`mesaj <code>input_index 1</code> ile kuruluyor (<code>${short(PJ.m1)}</code>). İmza ise <code>input_index 0</code> mesajına atılmıştı (<code>${short(PJ.m0)}</code>). Uymuyor: <b class="goodtxt">✗ RED</b>`}</li></ul>`,
     hyp?check('', 'Node hata yapmıyor; kurala uyan işlemi kabul ediyor. Eksik olan kuralın kendisi.') : check('stop', 'İşlem mempool\'a girmez, yayılmaz, hiçbir bloğa giremez. Ali\'nin cüzdanı ne kadar özensiz olursa olsun parası güvende.'))
  ,step(10,3, hyp?'Madenci bloğa ekler':'Blok yok',
     hyp?`<p>İşlem mempool'dan bir madencinin bloğuna girer. Ali'nin iki banknotu da harcanmış olur.</p>`:`<p>Reddedilen işlem hiçbir madenciye ulaşmaz.</p>`)
  ,step(11,1,'Ali sonucu görür',
     hyp?`<p>Ali'nin uygulaması zinciri tarar: hem 700 000 hem 300 000 sat'lık banknot gitmiş, geriye yalnız ${fmt(PJ.change)} sat dönmüş. Ali ${fmt(PJ.amts[0]-PJ.change)} sat ödediğini sanıyordu; gerçekte ${fmt(PJ.amts[0]+PJ.amts[1]-PJ.change)} sat çıktı. Bora ${fmt(PJ.bora)} sat aldı: 600 000 ödeme ve Ali'nin 300 000'i.</p>`
        :`<p>Ali'nin uygulaması işlemin zincire girmediğini görür; iki banknot da yerinde. Ödeme gerçekleşmedi. Bora parasını almak istiyorsa dürüst bir işlem kurmak zorunda.</p>`)
  ].join('');

  document.getElementById('anatMain').innerHTML = `<section class="tx">
  <div class="block">
    <span class="eyebrow">Dolandırıcılık akışı · baştan sona</span>
    <h2>Kim kimi, nerede, hangi byte'larla kandırıyor?</h2>
    <p>İmza kopyalama, gerçek bir ödemenin içinde adım adım: hangi bileşenin elinde ne var, ne nereye gidiyor, kim neyi biliyor. Byte'lar ve imzalar "Hangi input?" demosundaki işlemle aynı.</p>
    <div class="seg" role="group" aria-label="İmza kuralı">
      <button type="button" id="f-hyp" aria-pressed="${hyp}">Hayali kural · input_index yok</button>
      <button type="button" id="f-real" aria-pressed="${!hyp}">Gerçek kural · BIP341</button>
    </div>
    <p class="banner ${hyp?'bad':'good'}">${hyp?'Bu akış <b>hayali</b> bir kuralda yürüyor: input_index imza mesajında yok. Bugünkü Bitcoin\'de bu dolandırıcılık 9. adımda durur.':'Gerçek Bitcoin kuralı: input_index mesajda. Dolandırıcılık 9. adımda, node\'larda duruyor.'}</p>
  </div>

  <div class="block">
    <h2>Roller</h2>
    <div class="roles">
      <article class="card role ln2"><span class="rk">Kandıran</span><h3>Bora</h3>
        <p>Bir kişi ve onun çalıştırdığı <b>koordinatör sunucusu</b>, yani bir web servisi. <b>Hesap değil</b>: Bitcoin'de hesap yok. <b>Node değil</b>: kendi node'u olması gerekmiyor. <b>Madenci değil.</b></p>
        <p>Elinde iki güç var: Ali'nin imzalayacağı işlemi hazırlıyor ve imzaları topluyor, yani PSBT'nin yolunun ortasında duruyor. Ayrıca zincirdeki herkese açık veriyi okuyabiliyor.</p></article>
      <article class="card role ln1"><span class="rk">Kandırılan</span><h3>Ali</h3>
        <p>Aynı adresi iki kez kullanmış bir kullanıcı. İki bileşeni var:</p>
        <p><b class="c1">Cüzdan uygulaması</b> (telefon / bilgisayar): internete bağlı, banknotlarını takip eder, PSBT'yi taşır ve ağla konuşur.<br><b class="c0">Donanım cüzdanı</b>: private key burada, internete bağlı değil, yalnız kendisine verilen PSBT'yi görür ve imzalar.</p></article>
      <article class="card role ln3"><span class="rk">Hakem</span><h3>Bitcoin node'ları</h3>
        <p>Binlerce bağımsız bilgisayar. Kimin kim olduğunu bilmez, yalnız kuralları uygular. İşlemleri mempool'da tutar, madenciler de bloğa koyar.</p>
        <p>Ne saldırgan ne kurban. Hayali kuralda kopya imzayı kabul ederse hata node'da değil, kuralın kendisinde.</p></article>
    </div>
  </div>

  <div class="block">
    <h2>Sıra diyagramı</h2>
    <p class="muted" style="font-size:13.5px">Soldan sağa: Ali'nin cihazı, Ali'nin uygulaması, Bora'nın sunucusu, Bitcoin ağı. Kesikli oklar yalnız okuma işlemleri.</p>
    <div class="seqwrap">${svg}</div>
  </div>

  <div class="block">
    <h2>Adım adım</h2>
    <div class="fsteps">${steps}</div>
  </div>

  <div class="block">
    <h2>Nerede durdurulabilirdi?</h2>
    <div class="three">
      <article class="card"><h3>1 · Ali'nin alışkanlığı</h3><p>Her banknotu farklı bir adrese almak. Adres tekrar kullanılmasaydı Bora 2. adımda ikinci banknotu bulamaz, aynı anahtar da iki input'ta olmazdı.</p></article>
      <article class="card"><h3>2 · Ali'nin yazılımı</h3><p>Uygulama ya da cihaz, yabancı görünen her input'un kilidini kendi anahtarlarıyla karşılaştırmak. Veri zaten mesajda var. Ama bu korumanın işe yaraması için her cüzdanın bu kontrolü yapmayı hatırlaması gerekiyor (4. ve 5. adım).</p></article>
      <article class="card"><h3>3 · Protokol</h3><p><code>input_index</code> imza mesajında olduğu için kopya imza matematiksel olarak geçersiz. Node'lar 9. adımda reddediyor. Kimsenin dikkatine bağlı değil; bugünkü Taproot böyle çalışıyor.</p></article>
    </div>
    <p class="note">Gerçek payjoin protokolünde (BIP78) alıcı kendi input'unu Ali imzalamadan önce imzalamak zorunda. Bu sıra yüzünden bu akış birebir payjoin'de işlemez. Burada imzaları en sonda toplayıp işlemi kendisi yayınlayan bir koordinatör modeli kullanıldı; bu model coinjoin'lerde yaygın.</p>
  </div>
  </section>`;
  document.getElementById('f-hyp').onclick=()=>{flowMode='hyp';renderFlow();document.getElementById('f-hyp').focus();};
  document.getElementById('f-real').onclick=()=>{flowMode='real';renderFlow();document.getElementById('f-real').focus();};
  const go=n=>document.getElementById('fstep-'+n)?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  document.querySelectorAll('#anatMain .seq .row').forEach(g=>{g.addEventListener('click',()=>go(g.dataset.step));g.addEventListener('keydown',e=>{if(e.key==='Enter')go(g.dataset.step);});});
}


// ---- uygulamaya açılan kapı ----
const TABS = ['legacy','segwit','taproot','karsilastirma','hangi-input','akis'];
function setNav(name){document.querySelectorAll('#anatTabs a').forEach(a=>a.setAttribute('aria-current', a.dataset.t===name?'page':'false'));}
function show(tab){
  const h = TABS.includes(tab) ? tab : 'legacy';
  document.getElementById('anatMatrix').hidden = h !== 'karsilastirma';
  document.getElementById('anatMain').hidden = h === 'karsilastirma';
  if (h === 'karsilastirma') document.getElementById('anatMain').innerHTML = '';
  else if (h === 'hangi-input') renderHI();
  else if (h === 'akis') renderFlow();
  else render(h);
  setNav(h);
  return h;
}
window.Anatomy = { show, TABS, REAL };
})();
