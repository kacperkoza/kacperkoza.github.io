import { requestApi } from "./api";

export const getList = (sort, assigneUserId, creatorUserId, status) => {

    let params = '?sort=';
    params = sort ? params + sort : `${params}CREATED_DESC`;
    if (assigneUserId) {
        if (assigneUserId === 'UNASSIGNED') {
            // params = params + `&assigneeId=null`;
        } else {
            params = params + `&assigneeId=${assigneUserId}`
        }
    }
    params = creatorUserId ? params + `&creatorId=${creatorUserId}` : params;
    params = status ? params + `&status=${status}` : params;
    return requestApi(`/tasks/list${params}`, {
        method: 'GET'
    });
};

