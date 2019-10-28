import React from 'react';
import ReactDOM from 'react-dom';

import ContextOne from './context-1';

class ChildOne extends React.Component {
    static contextType = ContextOne;

    constructor(props) {
        super(props);
        console.log('Inside constructor - child 1');

        this.state = {
            counter: props.counter,
            msg: 'Hi there'
        }
    }

    render() {
        console.log('Inside render - child 1');
        console.log('This.Context - child 1', this.context);
        return (
            <h4>Hello World !!! counter is {this.state.counter} but message is {this.state.msg}</h4>
        )
    }

    static getDerivedStateFromProps(newProps, oldState) {
        console.log('Inside getDerivedStateFromProps - child 1');
        console.log('newProps ==> ', newProps, 'oldState ==> ', oldState);
        if(newProps.counter !== oldState.counter) {
            return {
                counter: newProps.counter
            }
        }
        return null;
    }

    componentDidMount() {
        console.log('Inside componentDidMount - child 1'); 
        this.setState((prevState, props) => {
            console.log('prevState ==> ', prevState, 'props from setstate ==> ', props); 
            return {
                msg: 'Got the message'
            }
        }); 
        
        // The below approach will update the state, but since there is no re-render that happens with the // current approach the updated state value will not be available to the child Components.
        // So we have to use this.setState()

        // this.state = {
        //     msg: 'got the msg'
        // }      

        console.log('This.State from Mount ==> ', this.state);
    }

    getSnapshotBeforeUpdate() {
        console.log('Inside getSnapshotBeforeUpdate - child 1');
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Inside componentDidUpdate - child 1');
        console.log('prevProps ==> ', prevProps, 'prevState ==> ', prevState);        
    }

    componentWillUnmount() {
        console.log('Inside componentWillUnmount - child 1');
    }
}

export default ChildOne;