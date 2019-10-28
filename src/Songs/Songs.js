import React, { Component } from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const Songs = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default Songs;