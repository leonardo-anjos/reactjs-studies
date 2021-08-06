import React from 'react';
import { connect } from 'react-redux';
import './Detail.css'

const SongDetail = ({ song }) => {

  if (!song) {
    return(
      <div className="select-song">
        Select a song
      </div>
    ); 
  }

  return (
    <div className="selected-song">
      <h3>Details for:</h3>
      <p>
        Title: {song.title} <br/>
        Band: {song.band} <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);