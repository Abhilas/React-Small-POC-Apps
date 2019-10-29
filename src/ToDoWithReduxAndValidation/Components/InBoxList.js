import React from 'react';
import { connect } from 'react-redux';

import { FAV_TASK, DELETE_TASK, EDIT_TASK } from '../Actions/ActionTypes';

const InBoxList = ({ lists, favTask, deleteTask, editTask }) => {
    const showList = () => {
        let content = <p className="dummy-text-color">Add Task to view</p>;
        if (lists.length > 0) {
            const updatedList = lists.filter(eachList => {
                return eachList.isFav === false;
            });

            if (updatedList.length > 0) {
                content = updatedList.map(eachList => {
                    return (
                        <div key={eachList.id} className="ui clearing margin-bottom-5" style={{ display: 'block' }}>
                            <div className="ui large label" style={{ display: 'block' }}>
                                <div className="ui grid">
                                    <div className="twelve wide column">
                                        <label className="ui label task-label big">
                                            {eachList.title}
                                        </label>
                                    </div>
                                    <div className="four wide column">
                                        <button
                                            className="ui button background-transparent right aligned no-padding-left inbox-list"
                                            title="Favourite Task"
                                            onClick={() => favTask(eachList.id)}><i className="star outline large icon"></i></button>
                                        <button
                                            className="ui button background-transparent right aligned no-padding-left"
                                            title="Delete Task"
                                            onClick={() => deleteTask(eachList.id)}><i className="trash large icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                });
            }
        }

        return content;
    };

    return (
        <div className="ui green segment">
            <h4 className="ui dividing header">Task List</h4>
            {showList()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        lists: state.Todo.lists
    }
};

const mapActionsToProps = (dispatch) => {
    return {
        favTask: (taskId) => dispatch({
            type: FAV_TASK,
            payload: taskId
        }),
        deleteTask: (taskId) => dispatch({
            type: DELETE_TASK,
            payload: taskId
        }),
        editTask: (taskId, taskVal) => dispatch({
            type: EDIT_TASK,
            payload: {
                taskId,
                taskVal
            }
        })
    }
}

export default connect(mapStateToProps, mapActionsToProps)(InBoxList);