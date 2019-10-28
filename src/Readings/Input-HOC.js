import React from 'react';
import ReactDOM from 'react-dom';

const InputHOC = (PassedComponent) => {
    return class ValidationHOC extends React.Component {
        state = {
            name: ''
        }
        render() {
            return (
                <PassedComponent value={this.state.name} onChange={this.onChangeHandler}/>
            )
        }

        componentDidMount() {
            console.log('componentDidMount from HOC');
            this.setState({
                name: 'Hi'
            })
        }

        onChangeHandler = (e) => {
            console.log('value from HOC ==> ', e.target.value);
            this.setState({
                name: e.target.value
            });
        }
        
    }
}

export default InputHOC;