import AstralObject from "../astralObjects/astralObject.js";

export default class Soloon extends AstralObject {
    constructor(row, column, color) {
        super(row, column);
        this.color = color;
    }
}