import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    renderError = (errorInfo) => {
        if (errorInfo.touched && errorInfo.error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {errorInfo.error}
                    </div>
                </div>
            )
        }
    }

    renderElement = (formProps) => {
        const updatedClassName = `field ${formProps.meta.touched && formProps.meta.error ? 'error' : ''}`;
        return (
            <div className={updatedClassName}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    onFormSubmit = (formValue) => {
        console.log(formValue);

        // calling the Create Stream with the form values.
        this.props.onSubmitHandler(formValue);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field
                    name='title'
                    component={this.renderElement}
                    label="Enter Title" />
                <Field
                    name='description'
                    component={this.renderElement}
                    label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

// For validation of Form, function name should be 'validate' and the name should not change
const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter a Title";
        // key 'title' in errors object is same as Field name
    } else if (formValues.title.length < 5) {
        errors.title = "Title must be atleast 5 characters";
        // key 'title' in errors object is same as Field name
    }


    if (!formValues.description) {
        errors.description = "You must enter a Description";
        // key 'description' in errors object is same as Field name
    }

    return errors;
}

// export default reduxForm({
//     form: 'StreamCreate',
//     validate: validate
// })(StreamCreate);

// Commented the above code and wrote the below code because we are already using reduxForm the same way as connect, so to place connect it will be really difficult as it is also the same was as reduxform.

// To overcome that we created a new variable and assigned the reduxform there and then pass that variable to the connect.


// Commented the below code as we are trying to make StreamForm a reuable component.
// const formWrapped = reduxForm({
//     form: 'StreamCreate',
//     validate: validate
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);

// and replaced with the below code.
export default reduxForm({
    form: 'StreamForm',
    validate: validate
})(StreamForm);