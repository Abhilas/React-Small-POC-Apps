import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import StreamReducer from './StreamReducer';

export default combineReducers({
    auth: AuthReducer,
    streams: StreamReducer,
    form: formReducer
});

// The key for "form: formReducer" should never be changed as its special for the redux-form.