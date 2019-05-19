import { requestApi } from "./api";

export const getList = (sort, assigneUserId, creatorUserId, status) => {
    let params = '?sort=';
    params = sort ? params + sort : `${params}CREATED_DESC`;
    params = assigneUserId ? params + `&assigneeId=${assigneUserId}` : params;
    params = creatorUserId ? params + `&creatorId=${creatorUserId}` : params;
    params = status && status !== 'ALL' ? params + `&status=${status}` : params;
    return requestApi(`/tasks/list${params}`, {
        method: 'GET',
        credentials: 'include'
    });
};

export const createTask = (body) => {
    return requestApi('/tasks', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(body)
    });
};

