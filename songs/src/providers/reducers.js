import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Oceans', band: 'Hillsong United', duration: '8:15' },
    { title: 'Scandal of Grace', band: 'Hillsong United', duration: '3:59' },
    { title: 'Endless Praise', band: 'Planetshakers', duration: '4:02' },
    { title: 'ALL ABOUT YOU', band: 'Planetshakers', duration: '7:23' },
    { title: 'Hosanna', band: 'Hillsong United', duration: '5:00' },
    { title: 'Intentional', band: 'Travis Greene', duration: '4:05' }, 
    { title: 'Heart Of Stone', band: 'Britt Nicole', duration: '6:16' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});