import { API_URL } from "./constants.js";

export const doPost = (url, bodyJson) => {
    console.log('hello post ', API_URL+url);
    console.log('hello post ', JSON.stringify(bodyJson));
}

export const doDelete = (url, row, column) => {
    console.log('bye bye ', url);
}