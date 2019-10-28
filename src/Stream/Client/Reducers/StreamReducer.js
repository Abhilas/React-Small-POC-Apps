import {
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    CREATE_STREAM
} from '../Actions/ActionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return state;
        case FETCH_STREAMS:
            const updatedStreamObj = action.payload.reduce(function (acc, cur) {
                acc[cur.id] = cur;
                return acc;
            }, {});

            return { ...state, ...updatedStreamObj };
        default:
            return state;
    }
}