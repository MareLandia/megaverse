import AstralObject from "../astralObjects/astralObject.js";

export default class Cometh extends AstralObject {
    constructor(row, column, direction) {
        super(row, column);
        this.direction = direction;
    }
}