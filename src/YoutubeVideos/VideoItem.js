import React from 'react';

const VideoItem = ({ video, onVideoSelectHandler }) => {
    return (
        <div className="item video-item" onClick={() => { onVideoSelectHandler(video) }}>
            <img
                className="ui image"
                alt={video.snippet.title}
                src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <a className="header">{video.snippet.title}</a>
                <div className="description">
                    Hi
                </div>
            </div>
        </div>
    )
}

export default VideoItem;