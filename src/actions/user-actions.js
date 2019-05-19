import { fetchAllUsers, login, register } from "../api/user-api";

export const Register = {
    SUCCESS: 'REGISTER_SUCCESS',
    IN_PROGRESS: 'REGISTER_IN_PROGRESS',
    ERROR: 'REGISTER_ERROR',
};

export const Login = {
    SUCCESS: 'LOGIN_SUCCES',
    IN_PROGRESS: 'LOGIN_IN_PROGRESS',
    ERROR: 'LOGIN_ERROR'
};

export const UserList = {
    SUCCESS: 'USER_LIST_SUCCESS',
    IN_PROGRESS: 'USER_LIST_IN_PROGRESS',
    ERROR: 'USER_LIST_ERROR',
};

export const submitRegister = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: Register.IN_PROGRESS });
        return register(data)
            .then(response => {
                switch (response.status) {
                    case 201:
                        console.log('success create account');
                        dispatch({
                            type: Register.SUCCESS
                        });
                        break;
                    case 409:
                        console.log('409 register');
                        dispatch({
                            type: Register.ERROR //user exists, notification?
                        });
                        break;
                    default:
                        console.log("Unknown register error: " + JSON.stringify(response));
                }
            })
            .catch(error => dispatch({ type: Register.ERROR, error }));
    };
};

export const submitLogin = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: Login.IN_PROGRESS });
        return login(data)
            .then(response => {
                switch (response.status) {
                    case 200:
                        console.log('success login');
                        dispatch({
                            type: Login.SUCCESS
                        });
                        break;
                    case 409:
                        console.log('409 login');
                        dispatch({
                            type: Login.ERROR //user exists, notification?
                        });
                        break;
                    default:
                        console.log("Unknown register error: " + JSON.stringify(response));
                }
            })
            .catch(error => dispatch({ type: Login.ERROR, error }));
    };
};

export const getAllUsers = () => {
    return (dispatch, getState) => {
        dispatch({ type: UserList.IN_PROGRESS });
        return fetchAllUsers()
            .then(response => {
                switch (response.status) {
                    case 200:
                        console.log('success fetch all users');
                        response.json()
                            .then(body => {
                                dispatch({
                                    type: UserList.SUCCESS,
                                    users: body.users
                                });
                            });

                        break;
                    default:
                        console.log("unknown fetch all users error: " + JSON.stringify(response));
                }
            })
            .catch(error => dispatch({ type: UserList.ERROR, error }));

    }
};
