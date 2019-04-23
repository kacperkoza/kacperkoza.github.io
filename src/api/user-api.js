import { requestApi } from "./api";

export const register = (body) =>
    requestApi('/users', {
        method: 'POST',
        body: JSON.stringify(body)
    });

export const login = (body) =>
    requestApi('/login', {
        method: 'POST',
        body: JSON.stringify(body)
    });

export const logout = () =>
    requestApi('/logout', {
        method: 'POST',
        credentials: 'include'
    });

export const update = (user) =>
    requestApi(`/users/${user.email}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        credentials: 'include'
    });

export const _delete = (email) =>
    requestApi(`/users/${email}`, {
        method: 'DELETE',
        credentials: 'include'
    });

export const userApi = {
    register,
    login,
    logout,
    update,
    delete: _delete
};
