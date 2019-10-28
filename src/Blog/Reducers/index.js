import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    post: PostReducer,
    user: UserReducer
});