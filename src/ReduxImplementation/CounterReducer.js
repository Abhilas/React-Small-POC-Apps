import React from 'react';
import * as Actions from './Actions';

const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.INCREMENT_COUNTER:
            return {
                ...state,
                counter: (state.counter) + 1
            }
        case "DECREMENT_COUNTER":
            return {
                ...state,
                counter: (state.counter) - 1
            }
    }

    return state;
}

export default CounterReducer;