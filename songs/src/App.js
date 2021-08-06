import React from 'react';
import Header from './components/Header/Header';
import SongList from './components/Song/List/List';
import SongDetail from './components/Song/Detail/Detail';
import './App.css'

const App = () => (
  <div>
    <Header />
    <div className="songs-list">
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
    </div>     
  </div>
);

export default App;