import React from 'react';
import { combineReducers } from 'redux';

import TodoReducer from './TodoReducer';

export default combineReducers({
    Todo: TodoReducer
});