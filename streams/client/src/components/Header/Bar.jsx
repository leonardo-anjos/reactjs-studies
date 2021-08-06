import React from  'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../../services/GoogleAuth';
import './Bar.css';

const HeaderBar = () => {
  return(
    <div className="main-header">
      <div className="ui secundary  pointing menu">
        <Link to="/" className="item">Stremay</Link>
        <div className="right menu">
          <Link to="/" className="item">All Streams</Link>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;