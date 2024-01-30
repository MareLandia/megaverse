import AstralObject from "../astralObjects/astralObject.js";
import { API_URL, MAP_URL } from "./constants.js";

export const doPost = async (url, bodyJson) => {
    console.log('hello post ', API_URL+url);
    console.log('hello post ', JSON.stringify(bodyJson));

    try {
        const response = await fetch(API_URL+url,
        { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyJson)
        });
        const result = await response.json();
        if (!response.ok) {
            if (response.status == 429) {
                setTimeout(() => { doPost(url, bodyJson)}, 1500)
            }
            throw new Error(`${response.status} ${response.statusText}`);
        }
        console.log('----- ',result);
    } catch (error) {
        if (error instanceof SyntaxError) {
          console.log('SyntaxError:', error);
        } else {
            console.log('Error:', error);
        }
    }
}

export const doDelete = async (url, row, column) => {
    console.log('bye bye ', url)
    try {
        const response = await fetch(API_URL+url+'s',
        { 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new AstralObject(row, column))
        });
        if (!response.ok) {
            if (response.status == 429) {
                setTimeout(() => { doDelete(url, row, column)}, 1000)
            }
            throw new Error(`${response.status} ${response.statusText}`);
        }
    } catch (error) {
        if (error instanceof SyntaxError) {
          console.log('SyntaxError:', error);
        } else {
          console.log('Error:', error);
        }
    }
}

export const doCheckMap = async () => {
    console.log('check map ');
    try {
        const response = await fetch(MAP_URL,
        { 
            method: "DELETE"
        });
        const result = await response.json();
        if (!response.ok) {
            if (response.status == 429) {
                setTimeout(() => { doDelete(url, row, column)}, 1000)
            }
            throw new Error(`${response.status} ${response.statusText}`);
        }
        console.log('----- ',result);
    } catch (error) {
        if (error instanceof SyntaxError) {
          console.log('SyntaxError:', error);
        } else {
          console.log('Error:', error);
        }
    }
}