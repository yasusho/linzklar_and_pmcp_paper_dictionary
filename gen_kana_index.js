import fs from 'fs';

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
            ${行('た')}
            ${tr({linzklar: "味", kana: "トゥイㇰ→", latin: "tuik1", file_name: "1_02_%E4%B8%8B"})}
            ${tr({linzklar: "残", kana: "トゥエゥㇰ·", latin: "tuek", file_name: "1_04_%E4%BA%BA"})}

            ${行('は')}
            ${tr({linzklar: "豊", kana: "ホウ→", latin: "ho1", file_name: "2_12_%E3%83%95"})}
            ${tr({linzklar: "骨", kana: "ホウ⤴", latin: "ho2", file_name: "2_07_%E5%A4%A9"})}
            ${tr({linzklar: "軟", kana: "ホウ·", latin: "ho", file_name: "1_02_%E4%B8%8B"})}
            ${tr({linzklar: "満", kana: "ボウ→", latin: "bo1", file_name: "2_04_%E4%B9%8B"})}
            ${tr({linzklar: "道", kana: "ポウ→", latin: "po1", file_name: "1_03_%E5%85%AD"})}
            ${tr({linzklar: "羊", kana: "ポウ→", latin: "po1", file_name: "2_10_%E3%83%BD%E3%83%BD"})}
            ${行('ま')}
            ${tr_2syllable({linzklar: "妙", kana: "ムン→ホアイ⤴", file_name: "2_03_%E3%83%8E%E3%83%8E"})}
            ${tr({linzklar: "米", kana: "モウ→", latin: "mo1", file_name: "2_14_%E9%87%9D"})}
            ${tr({linzklar: "行", kana: "モㇰ→", latin: "mok1", file_name: "1_03_%E5%85%AD"})}
            ${tr_2syllable({linzklar: "増", kana: "モㇰ→タウン→", file_name: "1_03_%E5%85%AD"})}
        </table>
    </section>
</body>

</html>`);

function 行(g) {
    return `<tr><td colspan="4"><h3 id="${g}行">${g}行</h3></td></tr>`;
}

function tr({linzklar, kana, latin, file_name}) {
return `<tr>
                <td><span class="kana-index-ja" lang="ja">${kana}</span></td>
                <td class="kana-index-latin">(${latin})</td>
                <td><span class="kana-index-linzklar">${linzklar}</span><span class="kana-index-ja" lang="ja">【${linzklar}】</span></td>
                <td class="link_to_char"><a href="${file_name}.html#u${linzklar.codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>`;
}

function tr_2syllable({linzklar, kana, file_name}) {
    return `<tr>
                <td colspan="2"><span class="kana-index-ja" lang="ja">${kana}</span></td>
                <td><span class="kana-index-linzklar">${linzklar}</span><span class="kana-index-ja" lang="ja">【${linzklar}】</span></td>
                <td class="link_to_char"><a href="${file_name}.html#u${linzklar.codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>`;
}