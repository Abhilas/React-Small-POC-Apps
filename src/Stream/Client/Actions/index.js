import StreamingVideoAPI from '../../../API/StreamingVideo';
import History from '../../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './ActionTypes';

export const signIn = (userID) => {
    return {
        type: SIGN_IN,
        payload: userID
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await StreamingVideoAPI.post('/streams', { ...formValues, userId });

        dispatch({
            type: CREATE_STREAM,
            payload: response.data
        });

        // Programitically Navigate the user to the list screen once the record has been added successfully.
        History.push('/');
    }
};

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await StreamingVideoAPI.get('/streams');

        dispatch({
            type: FETCH_STREAMS,
            payload: response.data
        })
    }
};


export const fetchStream = (streamId) => {
    return async (dispatch) => {
        const response = await StreamingVideoAPI.get(`/streams/${streamId}`);

        dispatch({
            type: FETCH_STREAM,
            payload: response.data
        });
    }
};

export const editStream = (streamId, formValues) => {
    return async (dispatch) => {
        const response = await StreamingVideoAPI.patch(`/streams/${streamId}`, formValues);

        dispatch({
            type: EDIT_STREAM,
            payload: response.data
        });

        // Programitically Navigate the user to the list screen once the record has been edited successfully.
        History.push('/');
    }
};

export const deleteStream = (streamId) => {
    return async (dispatch) => {
        await StreamingVideoAPI.delete(`/streams/${streamId}`);

        dispatch({
            type: DELETE_STREAM,
            payload: streamId
        });

        // Programitically Navigate the user to the list screen once the record has been Deleted successfully.
        History.push('/');
    }
};

