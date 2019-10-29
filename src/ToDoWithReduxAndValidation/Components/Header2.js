import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Actions/ActionTypes';

import Validate from '../HOC/Validate';
import { TodoFormValidationRules } from '../HOC/ValidateRules';

const Header = (props) => {
    let textInput = null;

    const submitFormHandler = (event) => {
        event.preventDefault();

        let isValid = props.validate(textInput.value);
        console.log('isValid ==> ', isValid);

        if (isValid) {
            // Calling the Submit Action
            props.addTask(textInput.value);
            textInput.value = '';
        }
    };

    const hasError = () => {
        if (props.errorMsg && props.errorMsg !== '') {
            return (
                <div className="ui tiny color-red">
                    <i className="exclamation triangle icon"></i>
                    {props.errorMsg}
                </div>
            )
        }
        return null;
    }

    const onChangeHandler = (event) => {
        //props.validate(event.target.value);
    }

    return (
        <>
            <h2 className="ui header text-center">To Do List</h2>
            <hr />
            <form className="ui form" onSubmit={submitFormHandler}>
                <div className="ui fluid action input">
                    <input
                        type="text"
                        placeholder="Add Task..."
                        ref={(input) => { textInput = input; }}
                        onChange={onChangeHandler} />
                    <button className="ui green button" type='submit'>Add Task</button>
                </div>
                {hasError()}
            </form>
        </>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        addTask: (taskDetail) => dispatch({
            type: Actions.ADD_TASK,
            payload: taskDetail
        })
    }
};

export default connect(null, mapActionsToProps)(Validate(Header, TodoFormValidationRules));