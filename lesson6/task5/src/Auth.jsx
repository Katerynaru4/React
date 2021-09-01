import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {
  state = {
    status: 'isLogin',
  };

  loginHandler = (newStatus) => {
    this.setState({
      status: newStatus,
    });
  };

  render() {
    let element;

    if (this.state.status === 'isLogin') {
      element = <Login loginBtnHandle={() => this.loginHandler('isLoading')} />;
    } else if (this.state.status === 'isLoading') {
      element = <Spinner size={50} />;
      setTimeout(() => {
        this.loginHandler('isLogout');
      }, 2000);
    } else {
      element = <Logout logoutBtnHandle={() => this.loginHandler('isLogin')} />;
    }

    return element
  }
}

export default Auth;
