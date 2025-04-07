const fs = require('fs');

convert("1_10_右");
convert("1_12_口");
convert("1_13_筆");
convert("1_14_門");

function convert(main_index) {
    const entries = fs.readFileSync(`entries_${main_index}.jsonl`, { encoding: 'utf8' })
        .trimEnd()
        .split(/\r?\n/)
        .map(line => JSON.parse(line));

    const converted = entries.map(entry => {
        let { linzklar, definitions, sentences } = entry;
        definitions = definitions ?? [];
        sentences = sentences ?? [];

        if (definitions.length === 0 && sentences.length === 0) {
            return `${linzklar}\t\t\n`;
        } else {
            return definitions.map(({ POS, definition }) => `${linzklar}\t${POS}\t${definition}\n`).join("") +
                sentences.map(({ linzklar: sentence_lin, translations }) => `${linzklar}\t${sentence_lin}\t${translations.join("|")}\n`).join("");
        }
    }).join("");

    fs.writeFileSync(`entries_${main_index}.tsv`, converted, { encoding: 'utf8' });
}