import { API_URL, MAP_URL } from "./constants.js";

const callApi = async (url, method, bodyJson) => {
    const requestOptions = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        }
    };

    if (!!bodyJson) {
        requestOptions.body = JSON.stringify(bodyJson)
    }

    try {
        const response = await fetch(API_URL+url, requestOptions);
        const result = await response.json();
        if (!response.ok) {
            if (response.status == 429) {
                setTimeout(() => { 
                    // If We have response.headers.get('retry-after') we can adjust the time value
                    callApi(url, method, bodyJson)
                }, 1000);
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

export const doPost = async (url, bodyJson) => {
    callApi(url, "POST", bodyJson);
}

export const doDelete = async (url, bodyJson) => {
    callApi(url, "DELETE", bodyJson);
}

export const doGetMapIsCorrect = async () => {
    callApi(MAP_URL, "GET");
}
