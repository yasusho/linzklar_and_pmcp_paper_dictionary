const fs = require('fs');
fs.writeFileSync("vivliostyle/口.html", `<link rel="stylesheet" href="common.css">

<style>
    @page:left { 
        background-image: url("爪見出し/口_left.png");
        background-size: 472px 665px;
        background-repeat: no-repeat;
        @top-left { font-family: "linzklar_rounded"; font-size: 14pt; } /* 左ページでは左の柱見出しのみ */
        @top-right { font-family: "linzklar_rounded"; font-size: 0pt; }
    }

    @page:right { 
        background-image: url("爪見出し/口_right.png");
        background-size: 472px 665px;
        background-repeat: no-repeat;
        @top-left { font-family: "linzklar_rounded"; font-size: 0pt; }
        @top-right { font-family: "linzklar_rounded"; font-size: 14pt; }  /* 右ページでは右の柱見出しのみ */
    }
    
    /* それぞれのページ指定では柱見出しを両側に指定しておき、上記ルールにより片方だけ潰す */
    @page:nth(1) {
        @top-left { content: "口"; }
        @top-right { content: "守"; }
    }

    @page:nth(2) {
        @top-left { content: "口"; }
        @top-right { content: "守"; }
    }
</style>

<!-- <header><img src="./ヤ_見出し.svg" style="width: 100%"></header> -->

${entry({
    linzklar: "口",
    pronunciation: "ヤㇺ→　(俗に) ヤウン→",
    definitions: [
        { POS: "[名詞]", definition: "(稀に)口" },
        { POS: "[動詞]", definition: "食べる、飲む、吸う" },
    ],
    sentences: [
        { linzklar: "我口米", pronunciation: "パイ⤴ヤㇺ→モウ→", translations: ["私は米を食べる。"] },
    ]
})}

${entry({
    linzklar: "口物",
    pronunciation: "ヤㇺ→ク·",
    definitions: [
        { POS: "[名詞]", definition: "食べ物、食料" },
        { POS: "[動詞]", definition: "食べる、食事する" },
    ],
    sentences: [
        { linzklar: "此倉口物貧", pronunciation: "カー→リー→ヤㇺ→ク·ヘイ⤴", translations: ["この倉庫は食べ物が少ない。"] },
        { linzklar: "何時我等口物", pronunciation: "ナン⤴カㇰ·パイ⤴ゲゥ·ヤㇺ⤴ク·", translations: ["いつ私たちは食事しますか？", "何度私たちは食事しますか？"] },
    ]
})}

${entry({
    linzklar: "口水",
    pronunciation: "ヤㇺ→ヌア⤴",
    definitions: [
        { POS: "[離合詞]", definition: "飲む" },
        { POS: "[名詞]", definition: "飲み水、飲み物" },
    ],
    sentences: [
        { linzklar: "我口清水", pronunciation: "パイ⤴ヤㇺ→リン·ヌア⤴", translations: ["私は綺麗な水を飲む。"] },
        { linzklar: "与我口水", pronunciation: "トゥイ⤴パイ⤴ヤㇺ→ヌア⤴", translations: ["水をくれ。"] },
    ]
})}

${entry({
    linzklar: "口銭処",
    pronunciation: "ヤㇺ→ズー→ホェ·",
    definitions: [
        { POS: "[名詞]", definition: "飲食店、レストラン、食堂" },
    ],
    sentences: [
    ]
})}

${entry({
    linzklar: "口件之囲",
    pronunciation: "ヤㇺ→ウォウ→ア·ピアー⤴",
    definitions: [
        { POS: "[名詞]", definition: "ダイニングルーム、食事室" },
    ],
    sentences: [
    ]
})}

${entry({
    linzklar: "口刀",
    pronunciation: "ヤㇺ→ガウ⤴",
    definitions: [
        { POS: "[名詞]", definition: "歯、牙" },
    ],
    sentences: [
    ]
})}

${entry({
    linzklar: "口煙",
    pronunciation: "ヤㇺ→ロウ→",
    definitions: [
        { POS: "[離合詞]", definition: "喫煙する" },
    ],
    sentences: [
        { linzklar: "口皇草煙", pronunciation: "ヤㇺ→タㇺ⤴コㇳ·ロウ→", translations: ["タムコㇳ (麻薬の一種) を吸う。"] },
    ]
})}

${entry({
    linzklar: "顔口",
    pronunciation: "ザン→ヤㇺ→",
    definitions: [
        { POS: "[名詞]", definition: "口" },
        { POS: "", definition: "名詞として口を指す場合は主にこちらを用いる。" }
    ],
    sentences: [
    ]
})}

${entry({
    linzklar: "平",
    pronunciation: "オウ→",
    definitions: [
        { POS: "[名詞]", definition: "板" },
        { POS: "[状態動詞]", definition: "平らである" },
    ],
    sentences: [
        { linzklar: "此道極平", pronunciation: "カー→ポウ→キㇳ·オウ→", translations: ["この道はすごく平らだ。"] },
    ]
})}


<div class="char-entry">
    <span class="char-entry-linzklar"><img src="../SY_handwriting/官字/美.png" style="height: 1em"><img src="../SY_handwriting/官字/麗.png" style="height: 1em"><img src="../SY_handwriting/風字/美.png" style="height: 1em"><img src="../SY_handwriting/風字/麗.png" style="height: 1em"></span> 
</div>

<div class="entry">
    <span class="entry-word-pronunciation" lang="ja">ヘゥㇺ→</span> <span class="entry-word-transcription" lang="ja">【美】【麗】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[状態動詞]</span> <span class="sub-definition" lang="ja">美しい、綺麗だ</span><br>
        <div class="sample-sentence">
            <span class="sample-sentence-linzklar">美絵在於机</span> <span class="sample-sentence-pronunciation" lang="ja">ヘゥㇺ→レゥㇰ→アイㇺ⤴イェ·セゥㇳ⤴</span>
            <span class="sample-sentence-transcription" lang="ja">【美絵在於机】</span> 
            <div class="sample-sentence-translation" lang="ja">綺麗な絵が机にある。</div>
        </div>
    </div>
</div>

${entry({
    linzklar: "守",
    pronunciation: "ヌㇺ→",
    definitions: [
        { POS: "[動詞]", definition: "守る" },
    ],
    sentences: [
        { linzklar: "兵守国", pronunciation: "カウㇰ⤴ヌㇺ→ズィㇷ゚→", translations: ["兵が国を守る。"] },
    ]
})}

${entry({
    linzklar: "大守処",
    pronunciation: "マー→ヌㇺ→ホェ·",
    definitions: [
        { POS: "[名詞]", definition: "ヌママ（アイル共和国タウポ郡の大都市）" },
    ],
    sentences: [
    ]
})}`, { encoding: 'utf8' });

function entry({ linzklar, pronunciation, definitions, sentences }) {
    if ([...linzklar].length === 1) {
    return `<div class="char-entry">
    <span class="char-entry-linzklar"><img src="../SY_handwriting/官字/${linzklar}.png" style="height: 1em"><img src="../SY_handwriting/風字/${linzklar}.png" style="height: 1em"></span> 
</div>

<div class="entry">
    <span class="entry-word-pronunciation" lang="ja">${pronunciation}</span> <span class="entry-word-transcription" lang="ja">【${linzklar}】</span>
    <div class="sub">
${gen_definitions(definitions)}
${sentences.map(gen_sample_sentence).join("")}    </div>
</div>`
    }
    return `<div class="entry">
    <span class="entry-word-linzklar">${linzklar}</span> <span class="entry-word-pronunciation" lang="ja">${pronunciation}</span> <span class="entry-word-transcription" lang="ja">【${linzklar}】</span>
    <div class="sub">
${gen_definitions(definitions)}
${sentences.map(gen_sample_sentence).join("")}    </div>
</div>`
}

function gen_definitions(definitions) {
    return definitions.map(({ POS, definition }) => {
        if (POS) {
            return `        <span class="sub-POS" lang="ja">${POS}</span> <span class="sub-definition" lang="ja">${definition}</span><br>`
        } else {
            return `        <span class="sub-definition" lang="ja">${definition}</span><br>`
        }
    }).join("\n")
}

function gen_sample_sentence({ linzklar, pronunciation, translations }) {
    return `        <div class="sample-sentence">
            <span class="sample-sentence-linzklar">${linzklar}</span> <span class="sample-sentence-pronunciation" lang="ja">${pronunciation}</span>
            <span class="sample-sentence-transcription" lang="ja">【${linzklar}】</span>
${translations.map(tr => `            <div class="sample-sentence-translation" lang="ja">${tr}</div>\n`).join('')

        }        </div>
`
}