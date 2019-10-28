import { combineReducers } from 'redux';

const SongsReducer = () => {
    return [{
        title: 'Song 1',
        duration: '4.05'
    }, {
        title: 'Song 2',
        duration: '2.00'
    }, {
        title: 'Song 3',
        duration: '3.9'
    }, {
        title: 'Song 4',
        duration: '4.55'
    }
    ]
};

const SelectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: SongsReducer,
    selectedSong: SelectedSongReducer
});

