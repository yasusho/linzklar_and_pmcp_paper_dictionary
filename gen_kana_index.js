import fs from 'fs';

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
    pronunciation2_table.flatMap(([linzklar, latin, kana]) => {
        if (linzklar === "座") {
            return [];
        }
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
    if (tr.initial_kana !== prev_tr.initial_kana 
        && "アカサタナハマヤラワガザダバパ".includes(tr.initial_kana)
        && !"アカサタナハマヤラワガザダバパ".includes(prev_tr.initial_kana)
     ) {
        return [行(tr.initial_kana), tr.content];
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
    <style>
        :root {
            column-count: 2;
            --scale: 0.93;
        }
        body {
            font-family: "Source Han Serif";
        }

        a::after {
            content: target-counter(attr(href url), page);
        }

        .link_to_char {
            text-align: right;
        }

        .kana-index-ja {
            font-size: calc(9pt * var(--scale));
            font-weight: bold;
            font-family: "Source Han Serif Heavy";
            line-break: strict; 
        }

        .kana-index-linzklar {
            font-size: calc(12pt * var(--scale));
            font-family: "linzklar_rounded";
            font-weight: normal;
        }

        h2 {
            float: block-start;
            float-reference: page;
            font-size: calc(20pt * var(--scale));
        }

        h3 {
            margin-top: 3px;
            margin-bottom: -3px;
            font-size: calc(12pt * var(--scale));
        }

        a {
            font-size: calc(9pt * var(--scale));
            font-family: "Source Han Serif";
            text-decoration: none;
            color: inherit;
        }

        .kana-index-latin {
            font-size: calc(9pt * var(--scale));
            font-family: "Source Han Serif";
        }
    </style>
</head>

<body>
    <section class="level1" aria-labelledby="index">
        <h2 id="index">仮名索引</h2>
        <table>
            ${trlist_with_headers.join("\n")}
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
                <td class="kana-index-latin">(${latin})</td>
                <td><span class="kana-index-linzklar">${linzklar}</span><span class="kana-index-ja" lang="ja">【${linzklar}】</span></td>
                <td class="link_to_char"><a href="${file_name}.html#u${linzklar.codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>`;
}

function tr_2syllable({ linzklar, kana, file_name }) {
    return `<tr>
                <td colspan="2"><span class="kana-index-ja" lang="ja">${kana}</span></td>
                <td><span class="kana-index-linzklar">${linzklar}</span><span class="kana-index-ja" lang="ja">【${linzklar}】</span></td>
                <td class="link_to_char"><a href="${file_name}.html#u${linzklar.codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>`;
}