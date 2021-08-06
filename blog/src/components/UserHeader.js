import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../providers/actions';

const mapStateToProps = (state, ownProps) => {
  return { users: state.users.find(user => user.id === ownProps.userId) };
}

export const UserHeader = 
connect(
  mapStateToProps, 
  { fetchUser }
)(
  class extends React.Component {
    
    render() {
      const { user } = this.props;
  
      if(!user) {
        return null;
      }
  
      return <div className="header">{user.name}</div>
    }
  }
);