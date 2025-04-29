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
            <tr>
                <td><span class="kana-index-ja" lang="ja">トゥイㇰ→</span></td>
                <td class="kana-index-latin">(tuik1)</td>
                <td><span class="kana-index-linzklar">味</span><span class="kana-index-ja" lang="ja">【味】</span></td>
                <td class="link_to_char"><a href="1_02_%E4%B8%8B.html#u${"味".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
            <tr>
                <td><span class="kana-index-ja" lang="ja">トゥエゥㇰ·</span>
                <td class="kana-index-latin">(tuek)</td>
                <td><span class="kana-index-linzklar">残</span><span class="kana-index-ja" lang="ja">【残】</span></td>
                <td class="link_to_char"><a href="1_04_%E4%BA%BA.html#u${"残".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>

            ${行('は')}
            <tr>
                <td><span class="kana-index-ja" lang="ja">ホウ→</span></td>
                <td class="kana-index-latin">(ho1)</td>
                <td><span class="kana-index-linzklar">豊</span><span class="kana-index-ja" lang="ja">【豊】</span></td>
                <td class="link_to_char"><a href="2_12_%E3%83%95.html#u${"豊".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
            <tr>
                <td><span class="kana-index-ja" lang="ja">ホウ⤴</span></td>
                <td class="kana-index-latin">(ho2)</td>
                <td><span class="kana-index-linzklar">骨</span><span class="kana-index-ja" lang="ja">【骨】</span></td>
                <td class="link_to_char"><a href="2_07_%E5%A4%A9.html#u${"骨".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
            <tr>
                <td><span class="kana-index-ja" lang="ja">ホウ·</td>
                <td class="kana-index-latin">(ho)</td>
                <td><span class="kana-index-linzklar">軟</span><span class="kana-index-ja" lang="ja">【軟】</span></td>
                <td class="link_to_char"><a href="1_02_%E4%B8%8B.html#u${"軟".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
            <tr><td><span class="kana-index-ja" lang="ja">ボウ→</span></td>
                <td class="kana-index-latin">(bo1)</td>
                <td><span class="kana-index-linzklar">満</span><span class="kana-index-ja" lang="ja">【満】</span></td>
                <td class="link_to_char"><a href="2_04_%E4%B9%8B.html#u${"満".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
            <tr><td><span class="kana-index-ja" lang="ja">ポウ→</span></td>
                <td class="kana-index-latin">(po1)</td>
                <td><span class="kana-index-linzklar">道</span><span class="kana-index-ja" lang="ja">【道】</span></td>
                <td class="link_to_char"><a href="1_03_%E5%85%AD.html#u${"道".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
            <tr><td><span class="kana-index-ja" lang="ja">ポウ→</span></td>
                <td class="kana-index-latin">(po1)</td>
                <td><span class="kana-index-linzklar">羊</span><span class="kana-index-ja" lang="ja">【羊】</span></td>
                <td class="link_to_char"><a href="2_10_%E3%83%BD%E3%83%BD.html#u${"羊".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
            ${行('ま')}
            <tr>
                <td colspan="2"><span class="kana-index-ja" lang="ja">ムン→ホアイ⤴</span></td>
                <td><span class="kana-index-linzklar">妙</span><span class="kana-index-ja" lang="ja">【妙】</span></td>
                <td class="link_to_char"><a href="2_03_%E3%83%8E%E3%83%8E.html#u${"妙".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
            <tr>
                <td><span class="kana-index-ja" lang="ja">モウ→</span></td>
                <td class="kana-index-latin">(mo1)</td>
                <td><span class="kana-index-linzklar">米</span><span class="kana-index-ja" lang="ja">【米】</span></td>
                <td class="link_to_char"><a href="2_14_%E9%87%9D.html#u${"米".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
            <tr>
                <td><span class="kana-index-ja" lang="ja">モㇰ→</span></td>
                <td class="kana-index-latin">(mok1)</td>
                <td><span class="kana-index-linzklar">行</span><span class="kana-index-ja" lang="ja">【行】</span></td>
                <td class="link_to_char"><a href="1_03_%E5%85%AD.html#u${"行".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
            <tr>
                <td colspan="2"><span class="kana-index-ja" lang="ja">モㇰ→タウン→</span></td>
                <td><span class="kana-index-linzklar">増</span><span class="kana-index-ja" lang="ja">【増】</span></td>
                <td class="link_to_char"><a href="1_03_%E5%85%AD.html#u${"増".codePointAt(0).toString(16).toLowerCase()}"></a></td>
            </tr>
        </table>
    </section>
</body>

</html>`);

function 行(g) {
    return `<tr><td colspan="4"><h3 id="${g}行">${g}行</h3></td></tr>`;
}