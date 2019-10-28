import * as ActionTypes from '../Actions/ActionTypes';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            }
        case ActionTypes.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                userId: null
            }
        default:
            return state;
    }
};