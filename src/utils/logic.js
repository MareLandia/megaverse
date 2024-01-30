import { COMETH_URL, POLYANET_URL, SOLOON_URL, MATRIX_LENGTH } from "./constants.js";
import { doDelete, doPost } from "./api.js";
import Cometh from "../comeths/cometh.js";
import Polyanet from "../polyanets/polyanet.js";
import Soloon from "../soloons/soloon.js";

const AstralTypes = ({
    Polyanet: 'polyanet',
    Soloon: 'soloon',
    Cometh: 'cometh'
});

const Directions = ({
    Up: "up",
    Down: "down",
    Right: "right",
    Left: "left"
});

const Colors = ({
    Blue: "blue",
    Red: "red",
    Purple: "purple",
    White: "white"
});

export const drawAstralObject = (item) => {
    switch (item.type) {
        case AstralTypes.Cometh:
            drawCometh(item);
            break;

        case AstralTypes.Soloon:
            drawSoloon(item);
            break;
    
        default: 
            drawPolyanet(item);
            break;
    }
}

function drawCometh(item) {
    console.log(item.direction, item.type,'---- (',item.row,',',item.column,')');
    doPost(COMETH_URL, new Cometh(item.row, item.column, item.direction));    
}

function drawSoloon(item) {
    console.log(item.color, item.type,'---- (',item.row,',',item.column,')');
    doPost(SOLOON_URL, new Soloon(item.row, item.column, item.color));    
}

function drawPolyanet(item) {
    console.log(item.type,'---- (',item.row,',',item.column,')');
    doPost(POLYANET_URL, new Polyanet(item.row, item.column));   
}

export function cleanMegaVerse(item) {
    doDelete(item.type, item.row, item.column);
}