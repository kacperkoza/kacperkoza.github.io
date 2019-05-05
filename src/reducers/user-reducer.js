import { Register, Login } from "../actions/user-actions";

const initialState = {
    isFetching: false,
    isAuth: false,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case Register.IN_PROGRESS:
            return {
                ...state,
                isFetching: true,
            };
        case Register.SUCCESS:
            return {
                ...state,
                isFetching: false,
            };
        case Register.ERROR:
            return {
                ...state,
                isFetching: false,
            };
        case Login.IN_PROGRESS:
            return {
                ...state,
                isFetching: true,
            };
        case Login.SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuth: true
            };
        case Login.ERROR:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
}
