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

${gen_entry({
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

${gen_entry({
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

${gen_entry({
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

${gen_entry({
    linzklar: "口銭処",
    pronunciation: "ヤㇺ→ズー→ホェ·",
    definitions: [
        { POS: "[名詞]", definition: "飲食店、レストラン、食堂" },
    ],
    sentences: [
    ]
})}

${gen_entry({
    linzklar: "口件之囲",
    pronunciation: "ヤㇺ→ウォウ→ア·ピアー⤴",
    definitions: [
        { POS: "[名詞]", definition: "ダイニングルーム、食事室" },
    ],
    sentences: [
    ]
})}

${gen_entry({
    linzklar: "口刀",
    pronunciation: "ヤㇺ→ガウ⤴",
    definitions: [
        { POS: "[名詞]", definition: "歯、牙" },
    ],
    sentences: [
    ]
})}

${gen_entry({
    linzklar: "口煙",
    pronunciation: "ヤㇺ→ロウ→",
    definitions: [
        { POS: "[離合詞]", definition: "喫煙する" },
    ],
    sentences: [
        { linzklar: "口皇草煙", pronunciation: "ヤㇺ→タㇺ⤴コㇳ·ロウ→", translations: ["タムコㇳ (麻薬の一種) を吸う。"] },
    ]
})}

${gen_entry({
    linzklar: "顔口",
    pronunciation: "ザン→ヤㇺ→",
    definitions: [
        { POS: "[名詞]", definition: "口" },
        { POS: "", definition: "名詞として口を指す場合は主にこちらを用いる。" }
    ],
    sentences: [
    ]
})}

${gen_entry({
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

${gen_entry({
    linzklar: "美",
    variants_官字: ["麗"],
    variants_風字: [],
    pronunciation: "ヘゥㇺ→",
    definitions: [
        { POS: "[状態動詞]", definition: "美しい、綺麗だ" },
    ],
    sentences: [
        { linzklar: "美絵在於机", pronunciation: "ヘゥㇺ→レゥㇰ→アイㇺ⤴イェ·セゥㇳ⤴", translations: ["綺麗な絵が机にある。"] },
    ]
})}

${gen_entry({
    linzklar: "守",
    pronunciation: "ヌㇺ→",
    definitions: [
        { POS: "[動詞]", definition: "守る" },
    ],
    sentences: [
        { linzklar: "兵守国", pronunciation: "カウㇰ⤴ヌㇺ→ズィㇷ゚→", translations: ["兵が国を守る。"] },
    ]
})}

${gen_entry({
    linzklar: "大守処",
    pronunciation: "マー→ヌㇺ→ホェ·",
    definitions: [
        { POS: "[名詞]", definition: "ヌママ（アイル共和国タウポ郡の大都市）" },
    ],
    sentences: [
    ]
})}`, { encoding: 'utf8' });

function gen_entry({ linzklar, pronunciation, definitions, sentences, variants_官字, variants_風字 }) {
    if ([...linzklar].length === 1) {
        const 官字_list = variants_官字 ? [linzklar, ...variants_官字] : [linzklar];
        const 風字_list = variants_風字 ? [linzklar, ...variants_風字] : [linzklar];

        return `<div class="char-entry">
    <span class="char-entry-linzklar">${官字_list.map(官字 => `<img src="../SY_handwriting/官字/${官字}.png" style="height: 1em">`).join("")
            }${風字_list.map(風字 => `<img src="../SY_handwriting/風字/${風字}.png" style="height: 1em">`).join("")
            }</span> 
</div>

<div class="entry">
    <span class="entry-word-pronunciation" lang="ja">${pronunciation}</span> <span class="entry-word-transcription" lang="ja">${[linzklar, ... new Set([... (variants_官字 ?? []), ...(variants_風字 ?? [])])].map(c => `【${c}】`).join("")
            }</span>
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