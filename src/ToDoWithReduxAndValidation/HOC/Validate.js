import React from 'react';
import { connect } from 'react-redux';

const Validate = (WrappedComp, validationRules) => {
    return class HOC extends React.PureComponent {
        constructor() {
            super();

            this.state = {
                errorDetails: this.initializeErrorObject()
            }
        }

        initializeErrorObject = () => {
            const errorObj = {};
            Object.keys(validationRules).forEach(eachKey => {
                errorObj[eachKey] = {
                    id: eachKey,
                    msg: ''
                }
            });

            console.log('errorObj ==> ', errorObj);

            return errorObj;
        }

        onChangeHandler = (event) => {
            const getElementId = event.target.id,
                getElementType = event.target.type,
                getElementValue = event.target.value,
                rules = validationRules[getElementId],
                error = {};

            // Check for Input, Checkbox, Radio Button
            switch (getElementType) {
                case 'text':
                    if (validationRules[getElementId]) {
                        if (getElementValue.length <= rules.minTextLength.value) {
                            error.id = getElementId;
                            error.msg = rules.minTextLength.errorMsg;
                        } else {
                            error.id = getElementId;
                            error.msg = '';
                        }

                        this.updateErrorState(getElementId, error.msg);
                    }
            }
        }

        onSubmitForm = (event) => {
            event.preventDefault();
            const data = new FormData(event.target);
            Object.keys(validationRules).forEach(eachRule => {
                if (validationRules[eachRule].isRequired) {
                    if (data.get(eachRule) === '') {
                        this.updateErrorState(eachRule, validationRules[eachRule].isRequired.errorMsg)
                    }
                }
            });
        }

        updateErrorState = (elementId, errorMessage) => {
            const errorDetail = { ...this.state.errorDetails };
            errorDetail[elementId].msg = errorMessage;

            this.setState({
                errorDetails: errorDetail
            });
        }

        render() {
            return (
                <WrappedComp
                    {...this.props}
                    errorDetails={this.state.errorDetails}
                    changeHandler={this.onChangeHandler}
                    formSubmitHandler={this.onSubmitForm} />
            )
        }
    }
}

export default Validate;