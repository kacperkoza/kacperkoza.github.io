import { createTask } from "../api/task-api";

export const TaskAdd = {
    IN_PROGRESS: 'TASK_ADD_IN_PROGRESS',
    SUCCESS: 'TASK_ADD_SUCCESS',
    ERROR: 'TASK_ADD_ERROR',
};

export const submitNewTask = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: TaskAdd.IN_PROGRESS });
        createTask(data)
            .then(response => {
                switch (response.status) {
                    case 200:
                        dispatch({
                            type: TaskAdd.SUCCESS,
                        });
                        break;
                    default:
                        console.log("Unknown task add error: " + JSON.stringify(response));
                        dispatch({ type: TaskAdd.ERROR })
                }
            })
            .catch(error => dispatch({ type: TaskAdd.ERROR, error }));
    }
};
