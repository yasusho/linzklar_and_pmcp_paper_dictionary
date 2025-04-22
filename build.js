import fs from 'fs';
import { to_kana, from_latin } from 'pekzep_syllable';

const variant_table = fs.readFileSync("VARIANTS.tsv", { encoding: 'utf-8' })
    .trimEnd()
    .split(/\r?\n/)
    .map(line => line.split("\t"))
    .slice(1);

const variant_map = new Map(variant_table.map(([linzklar, variants_官字, variants_風字]) => {
    return [linzklar, { variants_官字: [...variants_官字], variants_風字: [...variants_風字] }]
}));

const vulgar_table = fs.readFileSync("VULGAR.tsv", { encoding: 'utf-8' })
    .trimEnd()
    .split(/\r?\n/)
    .map(line => line.split("\t"));

const vulgar_map = new Map(vulgar_table.map(([linzklar, vulgar_pronunciation]) => {
    return [linzklar, { vulgar_pronunciation }]
}));

const pronunciation2_table = fs.readFileSync("PRONUNCIATIONS2.tsv", { encoding: 'utf-8' })
    .split(/\r?\n/)
    .map(line => line.split("\t"));

const idiomatic_multichar_pronunciation_table = fs.readFileSync("IDIOMATIC_MULTICHARS.tsv", { encoding: 'utf-8' })
    .trimEnd()
    .split(/\r?\n/)
    .map(line => line.split("\t"));

let LINZKLARS_IN_ROUNDED = "";

build("1_01_処");
build("1_02_下");
build("1_05_ナ而");
build("1_07_一？");
build("1_08_上");
build("1_09_二");
build("1_10_右");
build("1_12_口");
build("1_13_筆");
build("1_14_門");
build("1_15_函包箱");
build("2_01_ノ一");
build("2_02_常");
build("2_03_ノノ");
build("2_04_之");
build("2_05_四");
build("2_06_ヒクカ丹");
build("2_07_天");
build("2_08_火心");
build("2_09_再");
build("2_10_ヽヽ");
build("2_11_反");
build("2_12_フ");
build("2_13_傾");
build("2_14_針");
build("2_15_神十位");

{
    const glyphs = fs.readFileSync("non_dummy_glyph_list.json", { encoding: 'utf-8' });
    const required_glyphs = new Set([...LINZKLARS_IN_ROUNDED]);
    const missing_glyphs = [...required_glyphs].filter(g => !glyphs.includes(g));
    if (missing_glyphs.length > 0) {
        console.log(`Required glyphs for linzklar_rounded: ${missing_glyphs.join(", ")}`);
        console.log("Please replace the dummy glyphs, add them to the font and regenerate the font.");
    } else {
        console.log("All required glyphs are present in the linzklar_rounded font.");
    }
}


function group_entries_tsv(ungrouped) {
    // First, group by the first column (linzklar)
    // But keep the order of the original array
    const grouped = ungrouped.reduce((acc, entry) => {
        const [linzklar, second_column, third_column] = entry;
        if (acc[acc.length - 1]?.linzklar !== linzklar) {
            acc.push({ linzklar, definitions: [], sentences: [] });
        }
        if (!second_column && !third_column) {
            // ignore
            return acc;
        } else if (second_column.startsWith("[") || second_column === "") {
            acc[acc.length - 1].definitions.push({ POS: second_column, definition: third_column });            
        } else {
            acc[acc.length - 1].sentences.push({ linzklar: second_column, translations: third_column.split("|") });
        }
        return acc;
    }, []);
    return grouped;
}

function build(main_index) {

const guide_words = JSON.parse(fs.readFileSync(`GUIDE_WORDS_${main_index}.json`, { encoding: 'utf-8' }));

const entries_tsv = fs.readFileSync(`entries_${main_index}.tsv`, { encoding: 'utf8' })
    .trimEnd()
    .split(/\r?\n/)
    .map(line => line.split("\t"));

const entries =  group_entries_tsv(entries_tsv);

Object.entries(guide_words).forEach(([_key, value]) => {
    LINZKLARS_IN_ROUNDED += value.left + value.right;
});

const resulting_file_content = `<link rel="stylesheet" href="common.css">

<style>
    @page:left { 
        background-image: url("爪見出し/${main_index}_left.png");
        background-size: 483.8px 687.9px;
        background-repeat: no-repeat;
        @top-left { font-family: "linzklar_rounded"; font-size: 12pt; } /* 左ページでは左の柱見出しのみ */
        @top-right { font-family: "linzklar_rounded"; font-size: 0pt; }
    }

    @page:right { 
        background-image: url("爪見出し/${main_index}_right.png");
        background-size: 483.8px 687.9px;
        background-repeat: no-repeat;
        @top-left { font-family: "linzklar_rounded"; font-size: 0pt; }
        @top-right { font-family: "linzklar_rounded"; font-size: 12pt; }  /* 右ページでは右の柱見出しのみ */
    }
    
    /* それぞれのページ指定では柱見出しを両側に指定しておき、上記ルールにより片方だけ潰す */
${Object.entries(guide_words).map(([key, value]) => `    @page:nth(${key}) {
        @top-left { content: "${value.left}"; }
        @top-right { content: "${value.right}"; }
    }
`).join('\n')}</style>

${entries.map(gen_entry).join("\n\n")}`;

if (resulting_file_content.includes("«") 
    || resulting_file_content.includes("»")) {
console.log("このギュメの使い方は想定していません。hsjoihs に連絡してパーサーを直してもらってください。")
}
    

fs.writeFileSync(`vivliostyle/${main_index}.html`, resulting_file_content, { encoding: 'utf8' });

function gen_pronunciation(linzklar) {
    if (linzklar.startsWith("«") && linzklar.endsWith("»")) {
        const idiomatic_multichar = linzklar.slice(1, -1);
        const entry = idiomatic_multichar_pronunciation_table.find(([c_, _]) => c_ === idiomatic_multichar);
        if (entry) {
            return entry[1];
        } else {
            console.log(`Missing pronunciation for ${c}. Provide it in the PRONUNCIATIONS.tsv file.`);
            return `<span style="color: red">発音を提供せよ:【${c}】</span>`;
        }
    }
    return [...linzklar].map(c => {
        // search from the pronunciation table
        const entry = pronunciation2_table.find(([c_, _]) => c_ === c);
        if (entry) {
            const latin_pronunciation = entry[1];
            const kana_pronunciation = entry[2];

            if (latin_pronunciation === "" && kana_pronunciation === "") {
                return "";
            }
            
            // Check that the two are consistent
            const converted_kana = latin_pronunciation.split(" ").map(latin =>{
                return to_kana(from_latin(latin))
            }
            ).join("");
            if (converted_kana !== kana_pronunciation) {
                console.log(`Pronunciation mismatch for ${c}: 
    ${converted_kana} [converted from ${latin_pronunciation}] does not match with
    ${kana_pronunciation}`);
            }
            return kana_pronunciation;
        } else {
            console.log(`Missing pronunciation for ${c}. Provide it in the PRONUNCIATIONS.tsv file.`);
            return `<span style="color: red">発音を提供せよ:【${c}】</span>`;
        } 
    }).join("");
}

function gen_entry({ linzklar: linzklar_, definitions, sentences }) {
    const pronunciation_ = gen_pronunciation(linzklar_);
    const linzklar = linzklar_.replace(/«(.+?)»/g, "$1"); // remove the markers of idiomatic multichar

    sentences = sentences ?? [];
    definitions = definitions ?? [];
    if ([...linzklar].length === 1) {
        const variants_官字 = variant_map.get(linzklar)?.variants_官字;
        const variants_風字 = variant_map.get(linzklar)?.variants_風字;

        const 官字_list = variants_官字 ? [linzklar, ...variants_官字] : [linzklar];
        const 風字_list = variants_風字 ? [linzklar, ...variants_風字] : [linzklar];

        const vulgar_pronunciation = vulgar_map.get(linzklar)?.vulgar_pronunciation;

        return `<div class="group-char-entry-with-the-following">
<div class="char-entry">
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
</div>
</div> <!-- .group-char-entry-with-the-following -->`;
    }

    LINZKLARS_IN_ROUNDED += linzklar;

    return `<div class="entry">
    <span class="entry-word-linzklar">${linzklar}</span> <span class="entry-word-pronunciation" lang="ja">${pronunciation_}</span> <span class="entry-word-transcription" lang="ja">【${linzklar}】</span>
    <div class="sub">
${gen_definitions(definitions)}
${sentences.map(gen_sample_sentence).join("")}    </div>
</div>`
}

function gen_definitions(definitions) {
    definitions.forEach(({ definition }) => {
        const test = /<span class="inline-linzklar">([^<]*)<\/span>/.exec(definition);
        test && (LINZKLARS_IN_ROUNDED += test[1]);
    });

    return definitions.map(({ POS, definition }) => {
        if (POS) {
            return `        <span class="sub-POS" lang="ja">${POS}</span> <span class="sub-definition" lang="ja">${definition}</span><br>`
        } else {
            return `        <span class="sub-definition" lang="ja">${definition}</span><br>`
        }
    }).join("\n")
}

function gen_sample_sentence({ linzklar, translations }) {
    LINZKLARS_IN_ROUNDED += linzklar;
    const pronunciation_ = gen_pronunciation(linzklar);

    return `        <div class="sample-sentence">
            <span class="sample-sentence-linzklar">${linzklar}</span> <span class="sample-sentence-pronunciation" lang="ja">${pronunciation_}</span>
            <span class="sample-sentence-transcription" lang="ja">【${linzklar}】</span>
${translations.map(tr => `            <div class="sample-sentence-translation" lang="ja">${tr}</div>\n`).join('')

        }        </div>
`
}
}