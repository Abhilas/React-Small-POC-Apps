Steps as to how Thunk works.

1. User Event happens from the UI using dispatch, as we are using connect to dispatch the action.
2. Dispatch then directly calls Thunk with the passed arguments.

    If the passed argument is an Object then Thunk will directly call the reducers with the passed Object, basing on the type.

    If the passed argument is a function then Thunk will call the passed function with dispatch & getState as an argument.

    getState is optional.

3. Ok now once the API call happens then we can manually dispatch the action using type & payload data      got from the API.

4. Manually dispatch the action will again go to the Dispatch in step 2 and this time the object passed     will be an Object with type and Payload data.

5. Since it is an Object Thunk will directly call the reducers with the passed Object, basing on the        type.

So the key take here is if we are using Thunk/ any middleware we basically need to return a function with 'dispatch' & 'getState' as arguments from the action creator rather than an Object.

*** Refer to the Blog > Actions > index.js