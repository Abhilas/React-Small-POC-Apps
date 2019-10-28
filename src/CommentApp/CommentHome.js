import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail/CommentDetail';
import ApprovalCard from './ApprovalCard/ApprovalCard';

const comment = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail authorName='Sam' content='New book'/>
            </ApprovalCard>            
        </div>
    )
}

export default comment;