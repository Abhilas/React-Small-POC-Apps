import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import HOC from './Input-HOC';
import ChildThree from './Child-3';

class ChildTwo extends React.Component {
    state = {
        name: 'abhilas'
    }

    render() {
        return (
            <Fragment>
                <input type='text' value={this.state.name} onChange={this.onChangeHandler} />
                <ChildThree />
            </Fragment>
        )
    }

    onChangeHandler = (e) => {
        console.log('value from Comp ==> ', e.target.value);
        this.setState({
            name: e.target.value
        })
    }
}

export default HOC(ChildTwo);