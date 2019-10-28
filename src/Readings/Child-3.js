import React from 'react';
import ReactDOM from 'react-dom';

import ContextOne from './context-1';
import ContextTwo from './context-2';
import ChildFour from './Child-4';

class ChildThree extends React.Component {
    state = {
        ContextTwoVal: '',
        ContextOneVal: ''
    }

    render() {
        return (
            <ContextOne.Provider value={this.state.ContextOneVal}>
                <ContextTwo.Provider value={this.state.ContextTwoVal}>                
                    <ChildFour />
                </ContextTwo.Provider>
            </ContextOne.Provider>
        )
    }

    componentDidMount() {
        this.setState({
            ContextTwoVal: 'Blue',
            ContextOneVal: 'white'
        })
    }
}

export default ChildThree;




