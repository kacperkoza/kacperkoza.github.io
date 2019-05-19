import { Login, Register, UserList } from "../actions/user-actions";

const initialState = {
    isFetching: false,
    isAuth: false,
    list: []
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
        case UserList.IN_PROGRESS:
            return {
                ...state,
                isFetching: true
            };
        case UserList.SUCCESS:
            return {
                ...state,
                list: action.users,
                isFetching: false
            };
        case UserList.ERROR:
            return {
                ...state,
                list: [],
                isFetching: false
            };
        default:
            return state;
    }
}
