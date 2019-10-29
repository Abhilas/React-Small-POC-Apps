import React from 'react';
import * as Actions from './ActionTypes';

export const AddTask = (taskDetails) => {
    return {
        type: Actions.ADD_TASK,
        payload: taskDetails
    }
};

export const DeleteTask = (taskId) => {
    return {
        type: Actions.DELETE_TASK,
        payload: taskId
    }
};

export const EditTask = (taskId) => {
    return {
        type: Actions.EDIT_TASK,
        payload: taskId
    }
};

export const FavTask = (taskId) => {
    return {
        type: Actions.FAV_TASK,
        payload: taskId
    }
};

export const UnfavTask = (taskId) => {
    return {
        type: Actions.UNFAV_TASK,
        payload: taskId
    }
};

