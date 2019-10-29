import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Actions/ActionTypes';

import Validate from '../HOC/Validate';
import { TodoFormValidationRules } from '../HOC/ValidateRules';

class Header extends React.PureComponent {
    onFormSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.target);

        this.props.formSubmitHandler();

        // To get the FormData to work we need to have 'name' property for all the elements inside a form.
        //this.props.addTask(data.get('task'));
    }
    render() {
        return (
            <>
                <h2 className="ui header text-center">To Do List</h2>
                <hr />
                <form className="ui form" onSubmit={this.props.formSubmitHandler}>
                    <div className="ui fluid action input">
                        <input
                            type="text"
                            id="task_tb"
                            name="task_tb"
                            placeholder="Add Task..."
                            onChange={this.props.changeHandler} />
                        <button className="ui green button" type='submit'>Add Task</button>
                    </div>
                    <div className="ui tiny color-red">
                        {this.props.errorDetails['task_tb'].msg}
                    </div>
                </form>
            </>
        );
    }
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