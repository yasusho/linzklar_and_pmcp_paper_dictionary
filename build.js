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

<div class="char-entry">
    <span class="char-entry-linzklar"><img src="../SY_handwriting/官字/口.png" style="height: 1em"><img src="../SY_handwriting/風字/口.png" style="height: 1em"></span> 
</div>

<div class="entry">
    <span class="entry-word-pronunciation" lang="ja">ヤㇺ→　(俗に) ヤウン→</span> <span class="entry-word-transcription" lang="ja">【口】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[名詞]</span> <span class="sub-definition" lang="ja">(稀に)口</span><br>
        <span class="sub-POS" lang="ja">[動詞]</span> <span class="sub-definition" lang="ja">食べる、飲む、吸う</span><br>
        <div class="sample-sentence">
            <span class="sample-sentence-linzklar">我口米</span> <span class="sample-sentence-pronunciation" lang="ja">パイ⤴ヤㇺ→モウ→</span> 
            <span class="sample-sentence-transcription" lang="ja">【我口米】</span>  
            <div class="sample-sentence-translation" lang="ja">私は米を食べる。</div>
        </div>
    </div>
</div>

${entry()}

<div class="entry">
    <span class="entry-word-linzklar">口水</span> <span class="entry-word-pronunciation" lang="ja">ヤㇺ→ヌア⤴</span> <span class="entry-word-transcription" lang="ja">【口水】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[離合詞]</span> <span class="sub-definition" lang="ja">飲む</span><br>
        <span class="sub-POS" lang="ja">[名詞]</span> <span class="sub-definition" lang="ja">飲み水、飲み物</span><br>
        <div class="sample-sentence">
            <span class="sample-sentence-linzklar">我口清水</span> <span class="sample-sentence-pronunciation" lang="ja">パイ⤴ヤㇺ→リン·ヌア⤴</span>
            <span class="sample-sentence-transcription" lang="ja">【我口清水】</span>
            <div class="sample-sentence-translation" lang="ja">私は綺麗な水を飲む。</div>
        </div>
        <div class="sample-sentence">
            <span class="sample-sentence-linzklar">与我口水</span> <span class="sample-sentence-pronunciation" lang="ja">トゥイ⤴パイ⤴ヤㇺ→ヌア⤴</span>
            <span class="sample-sentence-transcription" lang="ja">【与我口水】</span>
            <div class="sample-sentence-translation" lang="ja">水をくれ。</div>
        </div> 
    </div>
</div>

<div class="entry">
    <span class="entry-word-linzklar">口銭処</span> <span class="entry-word-pronunciation" lang="ja">ヤㇺ→ズー→ホェ·</span> <span class="entry-word-transcription" lang="ja">【口銭処】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[名詞]</span> <span class="sub-definition" lang="ja">飲食店、レストラン、食堂</span><br>
    </div>
</div>

<div class="entry">
    <span class="entry-word-linzklar">口件之囲</span> <span class="entry-word-pronunciation" lang="ja">ヤㇺ→ウォウ→ア·ピアー⤴</span> <span class="entry-word-transcription" lang="ja">【口件之囲】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[名詞]</span> <span class="sub-definition" lang="ja">ダイニングルーム、食事室</span><br>
    </div>
</div>

<div class="entry">
    <span class="entry-word-linzklar">口刀</span> <span class="entry-word-pronunciation" lang="ja">ヤㇺ→ガウ⤴</span> <span class="entry-word-transcription" lang="ja">【口刀】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[名詞]</span> <span class="sub-definition" lang="ja">歯、牙</span><br>
    </div>
</div>

<div class="entry">
    <span class="entry-word-linzklar">口煙</span> <span class="entry-word-pronunciation" lang="ja">ヤㇺ→ロウ→</span> <span class="entry-word-transcription" lang="ja">【口煙】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[離合詞]</span> <span class="sub-definition" lang="ja">喫煙する</span><br>
        <div class="sample-sentence">
            <span class="sample-sentence-linzklar">口皇草煙</span> <span class="sample-sentence-pronunciation" lang="ja">ヤㇺ→タㇺ⤴コㇳ·ロウ→</span>
            <span class="sample-sentence-transcription" lang="ja">【口皇草煙】</span> 
            <div class="sample-sentence-translation" lang="ja">タムコㇳ (麻薬の一種) を吸う。</div>
        </div>
    </div>
</div>

<div class="entry">
    <span class="entry-word-linzklar">顔口</span> <span class="entry-word-pronunciation" lang="ja">ザン→ヤㇺ→</span> <span class="entry-word-transcription" lang="ja">【顔口】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[名詞]</span> <span class="sub-definition" lang="ja">口</span><br>
        <span class="sub-definition" lang="ja">名詞として口を指す場合は主にこちらを用いる。</span><br>
    </div>
</div>

<div class="char-entry">
    <span class="char-entry-linzklar"><img src="../SY_handwriting/官字/平.png" style="height: 1em"><img src="../SY_handwriting/風字/平.png" style="height: 1em"></span> 
</div>

<div class="entry">
    <span class="entry-word-pronunciation" lang="ja">オウ→</span> <span class="entry-word-transcription" lang="ja">【平】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[名詞]</span> <span class="sub-definition" lang="ja">板</span><br>
        <span class="sub-POS" lang="ja">[状態動詞]</span> <span class="sub-definition" lang="ja">平らである</span><br>
        <div class="sample-sentence">
            <span class="sample-sentence-linzklar">此道極平</span> <span class="sample-sentence-pronunciation" lang="ja">カー→ポウ→キㇳ·オウ→</span> 
            <span class="sample-sentence-transcription" lang="ja">【此道極平】</span> 
            <div class="sample-sentence-translation" lang="ja">この道はすごく平らだ。</div>
        </div>
    </div>
</div>


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

<div class="char-entry">
    <span class="char-entry-linzklar"><img src="../SY_handwriting/官字/守.png" style="height: 1em"><img src="../SY_handwriting/風字/守.png" style="height: 1em"></span> 
</div>

<div class="entry">
    <span class="entry-word-pronunciation" lang="ja">ヌㇺ→</span> <span class="entry-word-transcription" lang="ja">【守】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[動詞]</span> <span class="sub-definition" lang="ja">守る</span><br>
        <div class="sample-sentence">
            <span class="sample-sentence-linzklar">兵守国</span> <span class="sample-sentence-pronunciation" lang="ja">カウㇰ⤴ヌㇺ→ズィㇷ゚→</span> 
            <span class="sample-sentence-transcription" lang="ja">【兵守国】</span> 
            <div class="sample-sentence-translation" lang="ja">兵が国を守る。</div>
        </div>
    </div>
</div>

<div class="entry">
    <span class="entry-word-linzklar">大守処</span> <span class="entry-word-pronunciation" lang="ja">マー→ヌㇺ→ホェ·</span> <span class="entry-word-transcription" lang="ja">【大守処】</span>
    <div class="sub">
        <span class="sub-POS" lang="ja">[名詞]</span> <span class="sub-definition" lang="ja">ヌママ（アイル共和国タウポ郡の大都市）</span>
    </div>
</div>`, { encoding: 'utf8' });

function entry() {
    const linzklar = "口物";
    const pronunciation = "ヤㇺ→ク·";
    const definitions = [
        { POS: "[名詞]", definition: "食べ物、食料" },
        { POS: "[動詞]", definition: "食べる、食事する" },
    ];
    const sentences = [
        { linzklar: "此倉口物貧", pronunciation: "カー→リー→ヤㇺ→ク·ヘイ⤴", translations: ["この倉庫は食べ物が少ない。"] },
        { linzklar: "何時我等口物", pronunciation: "ナン⤴カㇰ·パイ⤴ゲゥ·ヤㇺ⤴ク·", translations: ["いつ私たちは食事しますか？", "何度私たちは食事しますか？"] },
    ];
    return `<div class="entry">
    <span class="entry-word-linzklar">${linzklar}</span> <span class="entry-word-pronunciation" lang="ja">${pronunciation}</span> <span class="entry-word-transcription" lang="ja">【${linzklar}】</span>
    <div class="sub">
${gen_definitions(definitions)}
${sentences.map(gen_sample_sentence).join("\n")}
    </div>
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

        }        </div>`
}