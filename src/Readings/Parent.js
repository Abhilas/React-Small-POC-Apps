import React from 'react';
import ReactDOM from 'react-dom';

import ChildOne from './Child-1';
import ChildTwo from './Child-2';

class Parent extends React.Component {
    constructor() {
        super();
        console.log('Inside constructor');
        this.state = {
            counter: 1
        }
    }

    static getDerivedStateFromProps() {
        console.log('Inside getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Inside componentDidMount');
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        console.log('Inside render');
        return (
            <div>
                <ChildOne counter={this.state.counter}/>
                <ChildTwo />
            </div>
        )
    }

    shouldComponentUpdate() {
        console.log('Inside shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('Inside getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Inside componentDidUpdate');
        console.log('prevProps parent ==> ', prevProps, 'prevState parent ==> ', prevState);
    }

    componentWillUnmount() {
        console.log('Inside componentWillUnmount');
    }
}

export default Parent;