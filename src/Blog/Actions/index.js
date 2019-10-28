import PostAPI from '../../API/JSONPlaceHolder';
import JSONPlaceHolder from '../../API/JSONPlaceHolder';

export const FetchPost = () => {
    return async (dispatch, getState) => {
        const response = await PostAPI.get('/posts');


        // return {
        //     type: 'FETCH_POST',
        //     payload: response
        // }

        /* Commented the above code coz while we are using Thunk we don't need to return the action with type and payload.
        
        Rather we have to dispatch the action and the Thunk will automatically forward that to the Reducers. 
        
        Refer the below code for the correct implementation. */

        dispatch({
            type: 'FETCH_POST',
            payload: response.data
        })
    }

}

export const FetchUser = (id) => {
    return async (dispatch, getState) => {
        const response = await JSONPlaceHolder.get(`/users/${id}`);

        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    }
}

/* Now after we called FetUser we came to know that the api will be called 100 times for fetching only 10 users, so to make it call only 10 times to get those 10 users we have refactored the code.

Find the refactored code below. */

export const FetchPostAndUser = () => {
    return async (dispatch, getState) => {
        await dispatch(FetchPost());

        // Now once the call to the api has been done to get the posts, we need to get the unique userId

        const resultPost = getState().post;
        let userIdArry = [];

        //console.log('result ==> ', resultPost);
        // Get the Unique User Id
        resultPost.map(eachPost => {
            if (userIdArry.indexOf(eachPost.userId) < 0) {
                userIdArry.push(eachPost.userId);
            }
        });

        // Once unique id is available then call the fetchuser with the id.
        userIdArry.forEach(id => dispatch(FetchUser(id)));
    }
}