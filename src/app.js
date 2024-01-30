import astralObjectList from './megaverse.json' assert { type: 'json' };
import { drawAstralObject, cleanMegaVerse } from './utils/logic.js';


function start(values) {
    let waitTime = 300;
    values.forEach((item, index) => {
        waitTime = index*1000;
        setTimeout(() => { drawAstralObject(item) }, waitTime);
    });
    // for (const item of values) {
    //     drawAstralObject(item);
    //     // cleanMegaVerse(item);
    // }

    printInConsole();
}

function printInConsole() {
    for (let x = 0; x < 29; x++) {
        let row = "";
        for (let y = 0; y < 29; y++) {
            const element = astralObjectList.filter((item) => (item.row == x && item.column == y));
            if (!!element[0]) {
                switch (element[0].type) {
                    case "cometh":
                        row = row + " -";
                        break;
                    case "polyanet":
                        row = row + ' X';
                        break;
                    case "soloon":
                        row += ' @';
                        break;
                }
            } else {
                row += '  '
            }
        }
        console.log(row);
    }
}

start(astralObjectList);
