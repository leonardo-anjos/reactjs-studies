import React, { Component } from 'react';
import './Display.css';

const seasonConfig = {
  summer: {
    text: "It's hot! let's go to the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, mouth) => {
  if(mouth > 2 && mouth < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

export default class SeasonDisplay extends Component {
  
  render() {
    const {lat, long} = this.props;
    console.log(lat, long);
    const season = getSeason(this.props.lat, new Date().getMonth);
    console.log(season);
    const{text, iconName} = seasonConfig[season]; 
    
    return(
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1 className="text">{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
      </div>
    );
  }

  
  
} 

