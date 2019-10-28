import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from './Client/Actions';

class GoogleAuthUsingRedux extends React.Component {
    // state = {
    //     isSignedIn: null
    // };

    // Since we want to call initialize the component only once we will be using componentDidMount
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '159037992567-c04of3mr7qijssdds60tocbk18oqt740.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // Now the GAPI is already initialized.
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({
                //     isSignedIn: this.auth.isSignedIn.get()
                // });

                // Commented the above code as it will not work with Redux.                

                // Using Redux the below code will work
                this.onAuthChange(this.auth.isSignedIn.get());
                // Done with adding the code for Redux flow

                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        // this.setState({
        //     isSignedIn: this.auth.isSignedIn.get()
        // });

        // Commented the above code as it will not work with Redux and wrote the below code.
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClickHandler = () => {
        this.auth.signIn();
    }

    onSignOutClickHandler = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClickHandler}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClickHandler}>
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn: signIn, signOut: signOut })(GoogleAuthUsingRedux);