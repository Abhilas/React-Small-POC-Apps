import React, { Component } from 'react';
import * as Action from './Actions';

import { connect } from 'react-redux';

class CounterDisplay extends Component {
    render() {
        return (
            <>
                <h4>{this.props.counter}</h4>
                <button onClick={this.props.onIncrement}>Increment</button>
                <button onClick={this.props.onDecrement}>Decrement</button>
            </>
        )
    }
}

const mapPropsToState = (state) => {
    console.log('state ==> ', state);
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('Action ==> ', Action);
    return {
        onIncrement: () => dispatch({ type: Action.INCREMENT_COUNTER }),
        onDecrement: () => dispatch({ type: Action.DECREMENT_COUNTER })
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(CounterDisplay);

