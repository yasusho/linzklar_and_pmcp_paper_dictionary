# 燐字紙辞書組版

## 全体の流れ

- `EDIT_ME.jsonl` に書く
- `node build.js` により、`vivliostyle/口.html` を作る
- `cd vivliostyle; npx vivliostyle build -m` により、`言将机戦人等定引之字言集.pdf` が出来上がる。トリムマークが要らないなら `-m` を削る。
- 満足したら、柱見出しを手動で割り当てるために `GUIDE_WORDS_口.json` を編集し、ビルド作業をもう一度行う

`cd vivliostyle; npx vivliostyle build -m` は vivliostyle/build.bat でできる。

なお、vivliostyle/preview.bat を使ってプレビューを立ち上げておくと、「`node build.js` により、`vivliostyle/口.html` を作る」をトリガーにしてプレビューが更新されるので作業しやすい。

どちらのバッチファイルも、エクスプローラーから起動すること。（カレントディレクトリの関係）
