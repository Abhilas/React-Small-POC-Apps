import React from 'react';
import { connect } from 'react-redux';

import { UNFAV_TASK, DELETE_TASK, EDIT_TASK } from '../Actions/ActionTypes';

const FavList = ({ lists, unFavTask, deleteTask }) => {
    const showList = () => {
        let content = <p className="dummy-text-color">Add Task to Favourites</p>;
        if (lists.length > 0) {
            const updatedList = lists.filter(eachList => {
                return eachList.isFav === true;
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
                                            className="ui button background-transparent right aligned no-padding-left fav-list"
                                            title="Favourite Task"
                                            onClick={() => unFavTask(eachList.id)}><i className="star large icon"></i></button>
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
        <div className="ui yellow segment">
            <h4 className="ui dividing header">Favourite List</h4>
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
        unFavTask: (taskId) => dispatch({
            type: UNFAV_TASK,
            payload: taskId
        }),
        deleteTask: (taskId) => dispatch({
            type: DELETE_TASK,
            payload: taskId
        })
    }
}

export default connect(mapStateToProps, mapActionsToProps)(FavList);