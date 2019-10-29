import React from 'react';
import VideoListAPI from '../API/VideoSearch';
import SearchBar from './SearchBar';
import './Video.css';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class Video extends React.Component {
    state = {
        searchData: [],
        selectedVideo: null
    }

    render() {
        return (
            <div>
                <SearchBar onSearchSubmitHandler={this.onSearchSubmit} />
                Found: {this.state.searchData.length} videos
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.searchData}
                                onVideoSelectHandler={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.onSearchSubmit('buildings'); // this is used for default
    }

    onSearchSubmit = async (searchText) => {
        console.log('search text ==> ', searchText);
        const response = await VideoListAPI.get('/search', {
            params: {
                q: searchText
            }
        });

        console.log('video response ==> ', response);

        this.setState({
            searchData: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
}

export default Video;
