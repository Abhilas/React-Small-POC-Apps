import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../Actions/index';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList = () => {
        return this.props.streams.map(eachStream => {
            return (
                <div className="item" key={eachStream.id}>
                    {this.renderCurrentUserButtons(eachStream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${eachStream.id}`} className="header">
                            {eachStream.title}
                        </Link>
                        <div className="description">
                            {eachStream.description}
                        </div>
                    </div>
                </div>
            )
        });
    }

    renderCurrentUserButtons = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    renderCreateButton = () => {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        console.log(this.props.streams);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreateButton()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);