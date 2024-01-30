import { doDelete } from "./api.js";
import Cometh from "../comeths/cometh.js";
import Polyanet from "../polyanets/polyanet.js";
import Soloon from "../soloons/soloon.js";

const AstralTypes = ({
    polyanet: 'polyanet',
    soloon: 'soloon',
    cometh: 'cometh'
});

const getAstral = (item) => {
    switch (item.type) {
        case AstralTypes.cometh:
            return new Cometh(item.row, item.column, item.direction);

        case AstralTypes.soloon:
            return new Soloon(item.row, item.column, item.color);
    
        default: 
            return new Polyanet(item.row, item.column);
    }
}

export const deleteAstralObject = (item) => {
    getAstral(item).removeServer();
}

export const saveAstralObject = (item) => {
    getAstral(item).saveServer();
}
