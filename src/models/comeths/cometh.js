import AstralObject from "../astralObjects/astralObject.js";
import { COMETH_URL } from "../../constants/constants.js";
export default class Cometh extends AstralObject {
    constructor(row, column, direction) {
        super(row, column);
        this.direction = direction;
        this.url = COMETH_URL;
        this.type = 'cometh';
    }

    generateBodyObject() {
        const body = {
            candidateId: this.candidateId,
            row: this.row, 
            column: this.row,
            direction: this.direction
        };
        return body;
    }
}