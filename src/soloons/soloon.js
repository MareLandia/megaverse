import AstralObject from "../astralObjects/astralObject.js";
import { SOLOON_URL } from "../utils/constants.js";
export default class Soloon extends AstralObject {
    constructor(row, column, color) {
        super(row, column);
        this.color = color;
        this.url = SOLOON_URL;
        this.type = 'soloon';
    }

    generateBodyObject() {
        const body = {
            row: this.row, 
            column: this.row,
            candidateId: this.candidateId,
            color: this.color
        };
        return body;
    }

}