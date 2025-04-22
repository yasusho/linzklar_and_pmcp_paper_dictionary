import fs from 'fs';

const GLOBAL_MAP = new Map();
populate("1_01_処");
populate("1_02_下");
populate("1_05_ナ而");
populate("1_07_一？");
populate("1_08_上");
populate("1_09_二");
populate("1_10_右");
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
    const ungrouped = fs.readFileSync(`entries_${main_index}.tsv`, { encoding: 'utf8' })
        .trimEnd()
        .split(/\r?\n/)
        .map(line => line.split("\t"));

    const grouped = ungrouped.reduce((acc, entry) => {
        const [linzklar, second_column, third_column] = entry;
        if (acc[acc.length - 1]?.linzklar !== linzklar) {
            acc.push({ linzklar, lines: [] });
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
        // Check if g.linzklar is already in the map
        if (GLOBAL_MAP.has(g.linzklar)) {
            const old_content = GLOBAL_MAP.get(g.linzklar);

            // Check if the new content (g.lines) is different from the old content
            if (JSON.stringify(old_content) !== JSON.stringify(g.lines)) {
                console.log(`Conflict detected for ${g.linzklar}:`);
                console.log(`Old content: ${JSON.stringify(old_content)}`);
                console.log(`New content: ${JSON.stringify(g.lines)}`);
            }
        }
        
        GLOBAL_MAP.set(g.linzklar, g.lines);
    });
}