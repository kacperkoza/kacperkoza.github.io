import { requestApi } from "./api";

export const getAll = () =>
    requestApi('/tasks', {
        method: 'POST',
        body: JSON.stringify(body)
    });
