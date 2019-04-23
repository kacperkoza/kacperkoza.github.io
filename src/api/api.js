import { API_URL } from '../config/url.js';

const COMMON_REQUEST_DATA = {
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
    }
};

export const requestApi = (endpoint, init = { method: 'GET' }) => fetch(API_URL + endpoint, Object.assign(COMMON_REQUEST_DATA, init));
