import astralObjectList from './megaverse.json' assert { type: 'json' };
import { saveAstralObject, deleteAstralObject } from './controllers/logic.js';
import { doGetMapIsCorrect } from './services/api.js';
import { printInConsole } from './utils/aux.js';

function start(values) {
    let waitTime = 0;
    values.forEach((item, index) => {
        waitTime += 1000;
        setTimeout(() => { saveAstralObject(item) }, waitTime);
        // setTimeout(() => { deleteAstralObject(item) }, waitTime);
    });

    doGetMapIsCorrect();
    printInConsole(astralObjectList);
}

start(astralObjectList);
