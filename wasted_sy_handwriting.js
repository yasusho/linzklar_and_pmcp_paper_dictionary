const fs = require('fs');
const section_file_names = fs.readFileSync("main_indexes.txt", { encoding: 'utf-8' })
    .trim()
    .split(/\r?\n/);


function check(char_style) {
    const dirPath = `SY_handwriting/${char_style}`;
    const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.png'));
    for (const file of files) {
        const linzklar = file.replace('.png', '');

        let exists = false;

        // check that this linzklar is mentioned in one of the HTML files in `vivliostyle` directory
        for (const section_file_name of section_file_names) {
            exists = exists || fs.readFileSync(`vivliostyle/${section_file_name}.html`, { encoding: 'utf-8' }).includes(`img src="../SY_handwriting/${char_style}/${linzklar}.png"`);
        }

        if (!exists) {
            console.log(`File ${char_style}/${file} is not referenced in any HTML file`);
        }
    }
}

check("官字");
check("風字");