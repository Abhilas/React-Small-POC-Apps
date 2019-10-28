import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    };

    // Since we want to call initialize the component only once we will be using componentDidMount
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '159037992567-c04of3mr7qijssdds60tocbk18oqt740.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // Now the GAPI is already initialized.
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                });
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }

    onSignInClickHandler = () => {
        this.auth.signIn();
    }

    onSignOutClickHandler = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
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

export default GoogleAuth;