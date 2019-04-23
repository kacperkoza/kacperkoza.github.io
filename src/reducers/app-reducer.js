import { combineReducers } from 'redux';

import userReducer from './user-reducer.js'

const appReducer = combineReducers({
    user: userReducer
});

export default (state, action) => {
    // if (action.type === 'USER_LOGOUT_SUCCESS') {
    //     state = undefined
    // }
    return appReducer(state, action)
}
