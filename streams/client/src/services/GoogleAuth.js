import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../providers/actions';

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

class GoogleAuth extends React.Component {
  
  state = {
    isSignedIn: null
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
          clientId: '1097856256938-m3tng1ocvv51uarap8dsp76jgrgsom5m.apps.googleusercontent.com',
          scope: 'email'
        }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return(
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon">Sing Out</i>
        </button>
      );
    } else {
      return(
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon">Sing in with Google</i>
        </button>
      );
    }
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

}

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);
