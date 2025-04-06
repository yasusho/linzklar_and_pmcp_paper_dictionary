const sharp = require('sharp');

async function crop({ inputFile, outputFile, x, y, dx, dy }) {
    await sharp(inputFile)
        .extract({ left: x, top: y, width: dx, height: dy })
        .toFile(outputFile)
        .then(() => {
            console.log(`Saved cropped image to ${outputFile}`);
        })
        .catch(err => {
            console.error('Error cropping image:', err);
        });
}

const horizontal_stride = 223 + 14 - 12/18;
const vertical_stride = 337;
const cross_term_1 = 1;
const cross_term_2 = -8/18;

async function cut_up(source, rows) {
    for (let i = 19; i >= 0; i--) {
        for (let j = 0; j < rows; j++) {
            await crop({
                inputFile: `${source}.png`,
                outputFile: `${source}/${String(j).padStart(2, "0")
                    }-${String(i).padStart(2, "0")
                    }.png`,
                x: Math.round(i * horizontal_stride + j * cross_term_1 + 13),
                y: Math.round(j * vertical_stride + i * cross_term_2 + 93),
                dx: 223, dy: 223
            });
        }
    }
}

// cut_up('楷1', 10);
cut_up('楷2', 6);
cut_up('楷3', 5);
cut_up('草1', 10);
cut_up('草2', 6);
cut_up('草3', 5);
