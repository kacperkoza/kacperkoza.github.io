import { TaskAdd } from "../actions/task-crud-actions";

const initialState = {
    isFetching: false
};

export default function taskAddReducer(state = initialState, action) {
    switch (action.type) {
        case TaskAdd.IN_PROGRESS:
            return {
                ...state,
                isFetching: true,
            };
        case TaskAdd.SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        case TaskAdd.ERROR:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state
    }
}
