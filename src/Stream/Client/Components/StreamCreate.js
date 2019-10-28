import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../Actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onFormSubmit = (formValue) => {
        console.log(formValue);

        // calling the Create Stream with the form values.
        this.props.createStream(formValue);
    }

    render() {
        return (
            <div>
                <h3>Create Stream</h3>
                <StreamForm onSubmitHandler={this.onFormSubmit} />
            </div>
        )
    }
}

export default connect(null, { createStream })(StreamCreate);