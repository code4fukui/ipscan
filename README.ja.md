# ipscan

ネットワーク上の IP アドレスを走査し、利用可能なサービスを検索するツールです。

## デモ
```
deno --allow-net https://code4fukui.github.io/ipscan/ipscan.js 8888 1
```
→
```
["http://192.168.1.10:8888"]
```

## 機能
- ネットワーク上の IP アドレスを順次走査
- 指定したポートでの接続を試行
- 利用可能なサービスのURLを出力

## 必要環境
- Deno ランタイム

## 使い方
以下のコマンドを実行します:

```
deno --allow-net https://code4fukui.github.io/ipscan/ipscan.js [ポート番号] [IP アドレス下位3桁]
```

ポート番号とIP アドレス下位3桁を指定することで、検索範囲を絞り込めます。

## ライセンス
MIT License