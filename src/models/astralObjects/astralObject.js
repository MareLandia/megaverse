import { CANDIDATE_ID, ASTRAL_URL } from "../../constants/constants.js";
import { doDelete, doPost } from "../../services/api.js";

export default class AstralObject {
    constructor(row, column) {
        this.candidateId = CANDIDATE_ID;
        this.row = row;
        this.column = column;
        this.url = ASTRAL_URL;
        this.type = '';
    }

    generateBodyObject() {
        const body = {
            row: this.row, 
            column: this.row,
            candidateId: this.candidateId
        };
        return body;
    }

    saveServer() {
        doPost(this.url, this.generateBodyObject());
    }

    removeServer() {
        doDelete(this.url, this.generateBodyObject());
    }
}