import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = () => request.get(`${baseUrl}/recipes`);