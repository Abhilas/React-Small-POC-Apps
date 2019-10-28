import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// For Redux Implementation folder
import CounterReducer from './ReduxImplementation/CounterReducer';
import CounterDisplay from './ReduxImplementation/Counter';

// For Songs folder
import Reducer from './Songs/Reducers';
import Songs from './Songs/Songs';

// For Blog folder
import BlogReducer from './Blog/reducers';
import Blog from './Blog/Blog';
import Thunk from 'redux-thunk';

// For Video Streaming & Router
import Stream from './Stream/Stream';
import StreamReducer from './Stream/Client/Reducers';

import CommentApp from './CommentApp/CommentHome';
import ReadingApp from './Readings/Parent';
import SeasonDisplay from './Seasons/SeasonDisplay';
import DatePicker from './Calendar/DatePicker'; // For Date Picker
import Calendar from './Calendar/Calendar'; // For Only Calendar
import Pics from './Pics/Pics'; // For Image Search
import Video from './YoutubeVideos/Video'; // For Video search

// For With Hooks
import HooksApp from './WithHOOKS/HooksApp';

// For ToDo App with State
import Todo from './ToDoWithState/Todo';

// For Todo app with Redux and validation
import TodoReducer from './ToDoWithReduxAndValidation/Reducer';
import TodoWithRedux from './ToDoWithReduxAndValidation/TodoWithRedux';

// Setup for Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(CounterReducer); // For ReduxImplementation Folder
// const store = createStore(Reducer); // For Songs Folder

// const store = createStore(BlogReducer, applyMiddleware(Thunk)); // For Blog Folder

// const store = createStore(StreamReducer, composeEnhancers(applyMiddleware(Thunk))); // For Streaming Video

// const store = createStore(TodoReducer); // For Todo using Redux

const App = () => {
    return (
        <Fragment>
            <div style={{ padding: 20 }}>
                <HooksApp />
            </div>
        </Fragment>
    )
};

// ReactDOM.render(
//     <Provider store={store}><App /></Provider>,
//     document.querySelector('#root')
// );

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
