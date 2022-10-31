import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = () => request.get(`${baseUrl}/recipes`);

export const create = async (recipeData, token) => {
    let response = await fetch(`${baseUrl}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...recipeData, likes: []})
    });

    let result = await response.json();

    return result;
};
