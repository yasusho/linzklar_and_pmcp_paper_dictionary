const fs = require('fs');
const path = require('path');

function foo(srcDir, destDir, rows, table) {
    for (let v = 19; v >= 0; v--) {
        for (let u = 0; u < rows; u++) {
            const srcFile = path.join(srcDir, `${String(u).padStart(2, "0")
                }-${String(v).padStart(2, "0")
                }.png`);

            if (table[u][v] === '\u3000') {
                console.log(`Skipping empty cell at (${u}, ${v})`);
                continue;
            }

            const destFile = path.join(destDir, `${table[u][v]}.png`);
            fs.copyFile(srcFile, destFile, (err) => {
                if (err) throw err;
                console.log(`Copied ${srcFile} to ${destFile}`);
            });
        }
    }
}

const table1 = fs.readFileSync('1.txt', 'utf-8').split(/\r?\n/).map(row => [...row]);
const table2 = fs.readFileSync('2.txt', 'utf-8').split(/\r?\n/).map(row => [...row]);
const table3 = fs.readFileSync('3.txt', 'utf-8').split(/\r?\n/).map(row => [...row]);

foo('splitting/楷1', '官字', 10, table1);
foo('splitting/草1', '風字', 10, table1);
foo('splitting/楷2', '官字', 6, table2);
foo('splitting/草2', '風字', 6, table2);
foo('splitting/楷3', '官字', 5, table3);
foo('splitting/草3', '風字', 5, table3);