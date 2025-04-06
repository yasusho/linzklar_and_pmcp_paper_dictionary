const fs = require('fs');

const pronunciation_table = fs.readFileSync("PRONUNCIATIONS.tsv", { encoding: 'utf-8' })
    .trimEnd()
    .split(/\r?\n/)
    .map(line => line.split("\t"));

build("1_12_口");
build("1_13_筆");
build("1_14_門");

function build(main_index) {

const guide_words = JSON.parse(fs.readFileSync(`GUIDE_WORDS_${main_index}.json`, { encoding: 'utf-8' }));

const entries = fs.readFileSync(`entries_${main_index}.jsonl`, { encoding: 'utf8' })
    .trimEnd()
    .split(/\r?\n/)
    .map(line => JSON.parse(line));

fs.writeFileSync(`vivliostyle/${main_index}.html`, `<link rel="stylesheet" href="common.css">

<style>
    @page:left { 
        background-image: url("爪見出し/${main_index}_left.png");
        background-size: 472px 665px;
        background-repeat: no-repeat;
        @top-left { font-family: "linzklar_rounded"; font-size: 14pt; } /* 左ページでは左の柱見出しのみ */
        @top-right { font-family: "linzklar_rounded"; font-size: 0pt; }
    }

    @page:right { 
        background-image: url("爪見出し/${main_index}_right.png");
        background-size: 472px 665px;
        background-repeat: no-repeat;
        @top-left { font-family: "linzklar_rounded"; font-size: 0pt; }
        @top-right { font-family: "linzklar_rounded"; font-size: 14pt; }  /* 右ページでは右の柱見出しのみ */
    }
    
    /* それぞれのページ指定では柱見出しを両側に指定しておき、上記ルールにより片方だけ潰す */
${Object.entries(guide_words).map(([key, value]) => `    @page:nth(${key}) {
        @top-left { content: "${value.left}"; }
        @top-right { content: "${value.right}"; }
    }
`).join('\n')}</style>

${entries.map(gen_entry).join("\n\n")}`, { encoding: 'utf8' });

function gen_pronunciation(linzklar) {
    return [...linzklar].map(c => {
        // search from the pronunciation table
        const entry = pronunciation_table.find(([c_, _]) => c_ === c);
        if (entry) {
            return entry[1];
        } else {
            console.log(`Missing pronunciation for ${c}. Provide it in the PRONUNCIATIONS.tsv file.`);
            return `<span style="color: red">発音を提供せよ:${c}</span>`;
        } 
    }).join("");
}

function gen_entry({ linzklar, vulgar_pronunciation, definitions, sentences, variants_官字, variants_風字 }) {
    const pronunciation_ = gen_pronunciation(linzklar);

    sentences = sentences ?? [];
    definitions = definitions ?? [];
    if ([...linzklar].length === 1) {
        const 官字_list = variants_官字 ? [linzklar, ...variants_官字] : [linzklar];
        const 風字_list = variants_風字 ? [linzklar, ...variants_風字] : [linzklar];

        return `<div class="char-entry">
    <span class="char-entry-linzklar">${官字_list.map(官字 => `<img src="../SY_handwriting/官字/${官字}.png" style="height: 1em">`).join("")
            }${風字_list.map(風字 => `<img src="../SY_handwriting/風字/${風字}.png" style="height: 1em">`).join("")
            }</span> 
</div>

<div class="entry">
    <span class="entry-word-pronunciation" lang="ja">${pronunciation_}${
        vulgar_pronunciation ? `　(俗に) ${vulgar_pronunciation}` : ""
    }</span> <span class="entry-word-transcription" lang="ja">${[linzklar, ... new Set([... (variants_官字 ?? []), ...(variants_風字 ?? [])])].map(c => `【${c}】`).join("")
            }</span>
    <div class="sub">
${gen_definitions(definitions)}
${sentences.map(gen_sample_sentence).join("")}    </div>
</div>`
    }
    return `<div class="entry">
    <span class="entry-word-linzklar">${linzklar}</span> <span class="entry-word-pronunciation" lang="ja">${pronunciation_}</span> <span class="entry-word-transcription" lang="ja">【${linzklar}】</span>
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
    const pronunciation_ = gen_pronunciation(linzklar);

    return `        <div class="sample-sentence">
            <span class="sample-sentence-linzklar">${linzklar}</span> <span class="sample-sentence-pronunciation" lang="ja">${pronunciation_}</span>
            <span class="sample-sentence-transcription" lang="ja">【${linzklar}】</span>
${translations.map(tr => `            <div class="sample-sentence-translation" lang="ja">${tr}</div>\n`).join('')

        }        </div>
`
}
}