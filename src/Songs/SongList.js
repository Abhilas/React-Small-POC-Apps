import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectSong } from './Actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={`id_${song.title}`}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.SelectSong(song)}>Select</button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state ==> ', state);
    return {
        songs: state.songs
    }
}

// Now to call the dispatch we can use 'mapDispatchToProps' and pass it as an argument to the connect or we can do it in the below way.

// SelectSong is from the 'SelectSong' action creator.
export default connect(mapStateToProps, {
    SelectSong: SelectSong
})(SongList);