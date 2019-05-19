import { combineReducers } from 'redux';

import userReducer from './user-reducer.js'
import taskReducer from './task-reducer.js'
import taskAddReducer from "./task-add-reducer";

const appReducer = combineReducers({
    user: userReducer,
    tasks: taskReducer,
    taskAdd: taskAddReducer
});

export default (state, action) => {
    // if (action.type === 'USER_LOGOUT_SUCCESS') {
    //     state = undefined
    // }
    return appReducer(state, action)
}
