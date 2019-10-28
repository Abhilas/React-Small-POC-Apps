import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href='/' className='avatar'>
                <img alt='avatar' src={Faker.image.avatar()} />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    {props.authorName}
                </a>
                <div className='metadata'>
                    <span className='date'>
                        Today at 6:00 PM
                    </span>
                </div>
                <div className='text'>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default CommentDetail;
