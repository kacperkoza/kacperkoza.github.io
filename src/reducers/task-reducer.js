import {
    TaskList,
    TaskListAssignedUserId,
    TaskListCreatorUserId,
    TaskListSort,
    TaskListStatus
} from "../actions/task-list-actions";
import { AssignedUserFilter, Sorts, StatusFilter } from "../components/task-list/task-list";

const initialState = {
    currentCount: 0,
    list: [],
    totalAvailable: 0,
    taskOptions: {
        sort: Sorts[0].value,
        assignedUserId: AssignedUserFilter[0].value,
        creatorUserId: AssignedUserFilter[0].value,
        status: StatusFilter[0].value
    }

};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case TaskList.IN_PROGRESS:
            return {
                ...state,
                isFetching: true,
            };
        case TaskList.SUCCESS:
            return {
                ...state,
                ...action.tasks,
                isFetching: false
            };
        case TaskList.ERROR:
            return {
                ...state,
                isFetching: false,
            };
        case TaskListSort:
            return {
                ...state,
                taskOptions: {
                    ...state.taskOptions,
                    sort: action.sort
                }
            };
        case TaskListStatus:
            return {
                ...state,
                taskOptions: {
                    ...state.taskOptions,
                    status: action.status
                }
            };
        case TaskListAssignedUserId:
            return {
                ...state,
                taskOptions: {
                    ...state.taskOptions,
                    assignedUserId: action.assignedUserId,
                }
            };
        case TaskListCreatorUserId:
            return {
                ...state,
                taskOptions: {
                    ...state.taskOptions,
                    creatorUserId: action.creatorUserId
                }
            };
        default:
            return state
    }
}
