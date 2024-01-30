import AstralObject from "../astralObjects/astralObject.js";
import { POLYANET_URL } from  "../../constants/constants.js";
export default class Polyanet extends AstralObject {
    constructor(row, column) {
        super(row, column);
        this.url = POLYANET_URL;
        this.type = 'polyanet';
    }
}