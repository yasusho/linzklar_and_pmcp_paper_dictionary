import fs from 'fs';

const GLOBAL_MAP = new Map();
const EXISTING_PARENTS = [];

populate("1_01_処");
populate("1_02_下");
populate("1_03_六");
populate("1_04_人");
populate("1_05_ナ而");
populate("1_06_一ノ");
populate("1_07_一？");
populate("1_08_上");
populate("1_09_二");
populate("1_10_右");
populate("1_11_言日");
populate("1_12_口");
populate("1_13_筆");
populate("1_14_門");
populate("1_15_函包箱");
populate("2_01_ノ一");
populate("2_02_常");
populate("2_03_ノノ");
populate("2_04_之");
populate("2_05_四");
populate("2_06_ヒクカ丹");
populate("2_07_天");
populate("2_08_火心");
populate("2_09_再");
populate("2_10_ヽヽ");
populate("2_11_反");
populate("2_12_フ");
populate("2_13_傾");
populate("2_14_針");
populate("2_15_神十位");

function populate(main_index) {
    let current_parent_linzklar;
    const ungrouped = fs.readFileSync(`entries_${main_index}.tsv`, { encoding: 'utf8' })
        .trimEnd()
        .split(/\r?\n/)
        .map(line => line.split("\t"));

    const grouped = ungrouped.reduce((acc, entry) => {
        const [entry_word, second_column, third_column] = entry;
        if ([...entry_word].length === 1) {
            current_parent_linzklar = entry_word;
            EXISTING_PARENTS.push(current_parent_linzklar);
        }

        if (acc[acc.length - 1]?.entry_word !== entry_word) {
            acc.push({ entry_word, lines: [], parent: current_parent_linzklar });
        }
        if (!second_column && !third_column) {
            // ignore
            return acc;

        } else {
            acc[acc.length - 1].lines.push({ second_column, third_column });
        }
        return acc;
    }, []);

    grouped.forEach(g => {
        // Check if g.entry_word is already in the map
        let parents = [g.parent];
        if (GLOBAL_MAP.has(g.entry_word)) {
            const old_content = GLOBAL_MAP.get(g.entry_word).lines;
            parents = [...new Set([...parents, ...GLOBAL_MAP.get(g.entry_word).parents])]; // Merge parents

            // Check if the new content (g.lines) is different from the old content
            if (JSON.stringify(old_content) !== JSON.stringify(g.lines)) {
                console.log(`Conflict detected for ${g.entry_word}:`);
                console.log(`Old content: ${JSON.stringify(old_content)}`);
                console.log(`New content: ${JSON.stringify(g.lines)}`);
            }
        }

        GLOBAL_MAP.set(g.entry_word, { lines: g.lines, parents });
    });
}

let result = "";

const fix_now_set = new Set();

for (const [key_, { parents }] of GLOBAL_MAP.entries()) {
    const key = key_.replaceAll(/[«»]/g, "");
    // Check if all the linzklars in `key` are present in the parent list
    if (new Set([...key]).isSubsetOf(new Set(parents))) {
        // all present; ok
    } else {
        const not_yet_listed = [...new Set([...key].filter(l => !parents.includes(l)))];
        const fix_NOW = not_yet_listed.filter(l => EXISTING_PARENTS.includes(l));
        const fix_later = not_yet_listed.filter(l => !EXISTING_PARENTS.includes(l));
        fix_now_set.add(...fix_NOW);
        result += JSON.stringify({
            word: key,
            listed: parents,
            not_yet_listed: {
                ... (fix_NOW.length === 0 ? {} : { fix_NOW }),
                ... (fix_later.length === 0 ? {} : { fix_later }),
            }
        }) + "\n";
    }
}

for (const s of fix_now_set) {
    if (!s) continue; 
    let report = "";
    for (const [key_, { parents, lines }] of GLOBAL_MAP.entries()) {
        if (key_.includes(s) && !parents.includes(s)) {
            // this linzklar is in the key but not in the parents; report this
            report += lines.map(l => `${key_}\t${l.second_column}\t${l.third_column}`).join("\n") + "\n";
        }
    }
    fs.writeFileSync(`cross_check/${s}.tsv`, report, { encoding: 'utf8' });
}

fs.writeFileSync("cross_check.jsonl", result, { encoding: 'utf8' });
console.log("Cross-checking completed. Results written to cross_check.jsonl.");
