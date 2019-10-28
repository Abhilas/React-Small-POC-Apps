import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../Actions';
import Modal from '../PageComponent/Modal';
import History from '../../history';

class StreamDelete extends React.Component {
    renderActionButtons = () => {
        const { id } = this.props.match.params;
        return (
            <>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </>
        );
    }

    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream ?';
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        return (
            <Modal
                header="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActionButtons()}
                onDismissHandler={() => History.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);