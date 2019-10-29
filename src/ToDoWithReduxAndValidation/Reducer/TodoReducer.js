import React from 'react';
import * as Actions from '../Actions/ActionTypes';

const INITIAL_STATE = {
    lists: [],
    taskCounter: 1
}

const TodoReducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case Actions.ADD_TASK: {
            const updatedTask = {
                id: state.taskCounter,
                title: actions.payload,
                isFav: false
            };

            return {
                ...state,
                taskCounter: state.taskCounter + 1,
                lists: state.lists.concat(updatedTask)
            }
        }
        case Actions.DELETE_TASK: {
            const updatedTask = state.lists.filter(eachList => {
                return eachList.id !== actions.payload
            });

            return {
                ...state,
                lists: updatedTask
            }
        }
        case Actions.EDIT_TASK:
            return {
                state
            }
        case Actions.FAV_TASK: {
            const updatedTask = state.lists.map(eachList => {
                if (eachList.id === actions.payload) {
                    eachList.isFav = true;
                }

                return eachList;
            });

            return {
                ...state,
                lists: updatedTask
            }
        }
        case Actions.UNFAV_TASK: {
            const updatedTask = state.lists.map(eachList => {
                if (eachList.id === actions.payload) {
                    eachList.isFav = false;
                }

                return eachList;
            });

            return {
                ...state,
                lists: updatedTask
            }
        }
        default:
            return state;
    }
};

export default TodoReducer;