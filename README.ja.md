# ipscan

ローカルネットワーク上の指定したポートで稼働するサービスをスキャンするコマンドラインツールです。

## 機能

- `192.168.x.1-254` のIP範囲をスキャンします。第3オクテット（`x`）は指定可能です。
- 各リクエストに300msのタイムアウトを設け、並列かつノンブロッキングでHTTPチェックを行います。
- 応答があったすべてのサービスのURLをJSON配列として出力します。

## 要件

- Denoランタイム
- ネットワークアクセス権限 (`--allow-net`)

## 使い方

URLからスクリプトを直接実行します:

```bash
deno run --allow-net https://code4fukui.github.io/ipscan/ipscan.js [PORT] [IP_THIRD_OCTET]
```

### 引数

- `[PORT]` (オプション): スキャンするポート番号。デフォルトは `80` です。
- `[IP_THIRD_OCTET]` (オプション): `192.168.X.y` のIP範囲における第3オクテット。デフォルトは `1` です。

### 例

`192.168.1.1-254` の範囲でポート `8888` のサービスをスキャンする場合:

```bash
deno run --allow-net https://code4fukui.github.io/ipscan/ipscan.js 8888 1
```

### 出力例

スクリプトは、見つかったURLのJSON配列を出力します:

```json
[
  "http://192.168.1.10:8888/",
  "http://192.168.1.105:8888/"
]
```

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
