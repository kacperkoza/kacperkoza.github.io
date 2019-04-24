import { register } from "../api/user-api";

export const Register = {
    IN_PROGRESS: 'REGISTER_IN_PROGRESS',
    SUCCESS: 'REGISTER_SUCCES',
    ERROR: 'REGISTER_ERROR',
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
