import { register, login } from "../api/user-api";

export const Register = {
    IN_PROGRESS: 'REGISTER_IN_PROGRESS',
    SUCCESS: 'REGISTER_SUCCESS',
    ERROR: 'REGISTER_ERROR',
};

export const Login = {
    IN_PROGRESS: 'LOGIN_IN_PROGRESS',
    SUCCESS: 'LOGIN_SUCCES',
    ERROR: 'LOGIN_ERROR'
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
