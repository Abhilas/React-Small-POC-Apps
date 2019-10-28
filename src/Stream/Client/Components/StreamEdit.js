import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../Actions/index';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onFormSubmit = (formValue) => {
        this.props.editStream(this.props.match.params.id, formValue);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading Stream...</div>
        }

        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm
                    onSubmitHandler={this.onFormSubmit}
                    initialValues={{ title: this.props.stream.title, description: this.props.stream.description }} />
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);

/* What , Why and When to use OwnProps.
   =============================

   As we can see here we have two variables here (StreamEdit & mapStateToProps).

   The props value from the first variable is needed in the second variable. 
   
   i.e. let's say we want to access the props value in the second variable, since props is only available to the first variable, it is not accessible to the second one.

   so to make it available to the second variable, mapStateToProps takes another argument called as 'ownProps'.

   This 'ownProps' is just a copy of the props that is passed to the first variable.

   Now there is no dependency as the props in the first variable and the ownProps in the second variable has the same value.

*/

/*
    initialValues
    =============

    We have used initialValues in 
    <StreamForm 
        onSubmitHandler={this.onFormSubmit} 
        initialValues={{ title: this.props.stream.title, description: this.props.stream.description }} />

    so whats the use of 'initialValues' ==>

        - Its basically used to pass some initial data to the Redux Form.
    
        - so the prop name 'initialValues' should not be changed as it a special prop.

        - It basically takes an object as an input
            - The key in the Object should be same as the <Field /> name in the form.

        - And it automatically binds the initial values to the field basing on the key names.

    We can also pass down a function that returns an object.
    
*/
