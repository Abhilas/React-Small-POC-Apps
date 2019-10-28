import React from 'react';
import { connect } from 'react-redux';

class User extends React.Component {
    render() {
        // const user = this.props.users.find(user => {
        //     return user.id === this.props.userId
        // });

        /* Commented the above code logic to get the user name coz we are handling it in 'mapStateToProps' using the 'ownProps' argument. */

        const { user } = this.props;

        if (!user) {
            return null;
        }

        return (
            <div className="header">{user.name}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.find(user => {
            return user.id === ownProps.userId
        })
    }
}

// mapStateToProps accepts another argument as 'ownProps' apart from 'state'. And that 'ownProps' is nothing but the reference to 'this.props' for class based component and 'props' for functional component.

// So if we use 'ownProps' we can access the props outside of the component.

export default connect(mapStateToProps)(User);