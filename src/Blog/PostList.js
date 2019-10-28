import React from 'react';
import { connect } from 'react-redux';
// import { FetchPost } from './Actions'; // Commented to implement the refactored code for 100 api call to only 10 calls.
import { FetchPostAndUser } from './Actions';
import User from './User';

class PostList extends React.Component {
    componentDidMount() {
        // this.props.FetchPost(); // Commented to implement the refactored code for 100 api call to only 10 calls.

        this.props.FetchPostAndUser();
    }

    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <User userId={post.userId} />
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post
    }
}

// export default connect(mapStateToProps, { FetchPost: FetchPost })(PostList); // Commented to implement the refactored code for 100 api call to only 10 calls.

export default connect(mapStateToProps, { FetchPostAndUser: FetchPostAndUser })(PostList);