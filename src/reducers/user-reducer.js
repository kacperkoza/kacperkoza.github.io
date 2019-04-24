import { Register } from "../actions/user-actions";

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
        default:
            return state;
    }
}
