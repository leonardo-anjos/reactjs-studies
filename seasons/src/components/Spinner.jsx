import React, { Component } from 'react';

export default class Spinner extends Component {
  
  render() {
    Spinner.defaultProps = {
      message: 'Loadng...'
    }
    
    const { message } = this.props;
    
    return(
      <div className="ui active dimmer">
       <div className="ui big text loader">{message}</div>
      </div>
    );
  
  }

} 