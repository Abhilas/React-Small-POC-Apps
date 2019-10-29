import React from 'react';
import { connect } from 'react-redux';

import * as Actions from './Actions/ActionTypes';

import Header from './Components/Header';
import InBoxList from './Components/InBoxList';
import FavList from './Components/FavList';

import './Custom.css';

class TodoWithRedux extends React.Component {
    render() {
        return (
            <div className="ui raised very padded text container segment">
                <Header />
                <FavList />
                <InBoxList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        lists: state.Todo.lists
    }
}

// const mapActionsToProps = (dispatch) => {
//     return {
//         addTask: () => dispatch({type: Actions.ADD_TASK, payload: }),
//     }
// }

export default connect(mapStateToProps)(TodoWithRedux);