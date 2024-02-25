import { combineReducers } from 'redux';

import todoSlice from './todolist';

const rootReducer = combineReducers({
    todolists: todoSlice,
});

export default rootReducer;