import { getList } from "../api/task-api";
import { Register } from "./user-actions";

export const TaskList = {
    IN_PROGRESS: 'TASK_LIST_IN_PROGRESS',
    SUCCESS: 'TASK_LIST_SUCCESS',
    ERROR: 'TASK_LIST_ERROR',
};

export const TaskListSort = 'DASHBOARD_SORT';
export const TaskListStatus = 'DASHBOARD_STATUS';
export const TaskListAssignedUserId = 'DASHBOARD_ASSIGNED_USER_ID';
export const TaskListCreatorUserId = 'DASHBOARD_CREATOR_USER_ID';

export const findAllTasks = () => {
    return (dispatch, getState) => {
        dispatch({ type: TaskList.IN_PROGRESS });
        const { sort, assignedUserId, creatorUserId, status } = getState().tasks.taskOptions;
        console.log(`get list with ${sort}, ${assignedUserId}, ${creatorUserId}, ${status}`);
        return getList(sort, assignedUserId, creatorUserId, status)
            .then(response => {
                switch (response.status) {
                    case 200:
                        console.log('scucess taks response code');
                        response.json()
                            .then(body => {
                                console.log('Successfully got task list', body);
                                dispatch({
                                    type: TaskList.SUCCESS,
                                    tasks: {
                                        list: body.tasks,
                                        totalAvailable: body.totalAvailable,
                                        currentCount: body.currentCount
                                    }
                                })
                            });
                        break;
                    default:
                        console.log("Unknown task list error: " + JSON.stringify(response));
                }
            })
            .catch(error => dispatch({ type: Register.ERROR, error }));
    };
};


export const changeSort = sort => {
    console.log('change sort to ' + sort);
    return (dispatch, getState) => {
        dispatch({ type: TaskListSort, sort });
        findAllTasks()(dispatch, getState);
    };
};

export const changeStatusFilter = status => {
    console.log('change status to ' + status);
    return (dispatch, getState) => {
        dispatch({ type: TaskListStatus, status });
        findAllTasks()(dispatch, getState);
    };
};

export const changeAssignedUserIdFilter = assignedUserId=> {
    console.log('change assigned user to ' + assignedUserId);
    return (dispatch, getState) => {
        dispatch({ type: TaskListAssignedUserId, assignedUserId });
        findAllTasks()(dispatch, getState);
    };
};

export const changeCreatorUserIdFilter = creatorUserId=> {
    console.log('change assigned user to ' + creatorUserId);
    return (dispatch, getState) => {
        dispatch({ type: TaskListCreatorUserId, creatorUserId });
        findAllTasks()(dispatch, getState);
    };
};

