import React from 'react';
import { Link } from 'react-router-dom';
// import GoogleAuth from '../../GoogleAuth';
import GoogleAuthUsingRedux from '../../GoogleAuthUsingRedux';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">
                Streamer App
            </Link>
            <div className="right menu">
                <Link to='/' className="item">
                    All Streams
                </Link>

                <GoogleAuthUsingRedux />
            </div>
        </div>
    );
};

export default Header;