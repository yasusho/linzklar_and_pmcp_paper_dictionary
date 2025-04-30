import fs from 'fs';
import { to_kana, from_latin } from 'pekzep_syllable';

const pronunciation2_table = fs.readFileSync("PRONUNCIATIONS2.tsv", { encoding: 'utf-8' })
    .split(/\r?\n/)
    .map(line => line.split("\t"));

function getPercentEncodedFileName(linzklar) {
    const file_names = fs.readFileSync("main_indexes.txt", { encoding: 'utf-8' })
        .trim()
        .split(/\r?\n/);
    for (const file_name of file_names) {
        const belongs = fs.readFileSync(`entries_${file_name}.tsv`, { encoding: 'utf-8' }).match(new RegExp(`^${linzklar}\t`, "m"));
        if (belongs) {
            return encodeURIComponent(file_name);
        }
    }
    throw new Error(`File name not found for ${linzklar}: cannot generate the index`);
}

const trlist =
    pronunciation2_table.flatMap(([linzklar, latin_, kana]) => {
        if (linzklar === "座") {
            return [];
        }

        const latin = latin_.startsWith("z") ? (
            from_latin(latin_).onset + latin_.slice(1) // replace the z with z-acute if necessary
        ) : latin_;

        if (latin.trim().includes(" ")) {
            // 2-syllable word
            return [{ initial_kana: kana[0], content: tr_2syllable({ linzklar, kana, file_name: getPercentEncodedFileName(linzklar) }) }]
        } else {
            // 1-syllable word
            return [{ initial_kana: kana[0], content: tr({ linzklar, kana, latin, file_name: getPercentEncodedFileName(linzklar) }) }]
        }
    });

// 「ア行」「カ行」などの見出しを追加する

const trlist_with_headers = trlist.flatMap((tr, i) => {
    // i == 0 の場合は「ア行」見出しを追加
    if (i === 0) {
        return [行('ア'), tr.content];
    }

    const prev_tr = trlist[i - 1];

    const boundaries = "カサタナハマヤラワ";

    for (let j = 0; j < boundaries.length; j++) {
        if (tr.initial_kana >= boundaries[j] && prev_tr.initial_kana < boundaries[j]) {
            return [行(boundaries[j]), tr.content];
        }
    }

    return [tr.content];
})

fs.writeFileSync('vivliostyle/kana_index.html',

    `<!doctype html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <title>仮名索引</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="kana_index.css">
</head>

<body>
    <section class="level1" aria-labelledby="index">
        <h2 id="index">仮名索引</h2>
        <table>
            ${trlist_with_headers.join("\n" + " ".repeat(12))}
        </table>
    </section>
</body>

</html>`);

function 行(g) {
    return `<tr><td colspan="4"><h3 id="${g}行">${g}行</h3></td></tr>`;
}

function tr({ linzklar, kana, latin, file_name }) {
    return `<tr>
                <td><span class="kana-index-ja" lang="ja">${kana}</span></td>
                <td><span class="kana-index-latin">(${latin})</span></td>
                <td><span class="kana-index-linzklar">${linzklar}</span></td><td><span class="kana-index-ja" lang="ja">【${linzklar}】</span></td>
                <td class="link_to_char"><a href="${file_name}.html#u${linzklar.codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>`;
}

function tr_2syllable({ linzklar, kana, file_name }) {
    return `<tr>
                <td colspan="2"><span class="kana-index-ja" lang="ja">${kana}</span></td>
                <td><span class="kana-index-linzklar">${linzklar}</span></td><td><span class="kana-index-ja" lang="ja">【${linzklar}】</span></td>
                <td class="link_to_char"><a href="${file_name}.html#u${linzklar.codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>`;
}