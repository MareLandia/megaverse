import { CANDIDATE_ID } from "../utils/constants.js";

export default class AstralObject {
    constructor(row, column) {
        console.log('Contructor astral objects');
        console.log('AO >> setValue row: ', row, ' column: ', column);
        this.row = row;
        this.column = column;
        this.candidateId = CANDIDATE_ID;
    }
}