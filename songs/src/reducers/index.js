import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Nothing else matters',
            author: 'Metallica',
            duration: '5:00'
        },
        {
            title: 'Iron Maiden',
            author: 'Iron Maiden',
            duration: '6:00'
        },
        {
            title: 'Psicho circus',
            author: 'Kiss',
            duration: '5:30'
        },
        {
            title: 'Smells like teen spirit',
            author: 'Nirvana',
            duration: '4:30'
        }

    ];
}

const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});