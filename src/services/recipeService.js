import * as request from "./requester";

const baseUrl = "http://localhost:3030/data";

export const getAll = () => request.get(`${baseUrl}/recipes`);

export const create = async (recipeData, token) => {
    let response = await fetch(`${baseUrl}/recipes`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({ ...recipeData, likes: [] }),
    });

    let result = await response.json();

    return result;
};

export const getOne = (recipeId, signal) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, { signal }).then((res) =>
        res.json()
    );
};

export const update = (recipeId, recipeData) =>
    request.put(`${baseUrl}/recipes/${recipeId}`, recipeData);

export const destroy = (recipeId, token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: "DELETE",
        headers: {
            "X-Authorization": token,
        },
    }).then((res) => res.json());
};


export const getMyRecipes = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/recipes?where=${query}`);
};

export const getSortedRecipes = () => {
    // let query = encodeURIComponent(`likes desc`);

    return request.get(`${baseUrl}/recipes?sortBy=_createdOn%20desc}`);
};