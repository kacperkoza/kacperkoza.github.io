import { combineReducers } from 'redux';

import userReducer from './user-reducer.js'
import taskReducer from './task-reducer.js'

const appReducer = combineReducers({
    user: userReducer,
    tasks: taskReducer
});

export default (state, action) => {
    // if (action.type === 'USER_LOGOUT_SUCCESS') {
    //     state = undefined
    // }
    return appReducer(state, action)
}
