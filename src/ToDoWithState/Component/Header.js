import React from 'react';

import '../Custom.css';

const Header = (props) => {
    let textInput = null;

    const onFormSubmitHandler = (event) => {
        event.preventDefault();

        // get the data for the text box using ref, there is another way using Hooks.
        let taskVal = textInput.value;

        props.addTask(taskVal);

        // Setting the taskVal to empty
        textInput.value = '';
    }

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

    return (
        <>
            <h2 className="ui header text-center">To Do List</h2>
            <hr />
            <form className="ui form" onSubmit={onFormSubmitHandler}>
                <div className="ui fluid action input">
                    <input
                        type="text"
                        placeholder="Add Task..."
                        ref={(input) => { textInput = input; }} />
                    <button className="ui green button" type='submit'>Add Task</button>
                </div>
                {hasError()}
            </form>

        </>
    )
}

export default Header;