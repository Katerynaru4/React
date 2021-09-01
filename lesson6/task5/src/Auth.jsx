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
    switch (this.state.status) {
      case 'isLogin':
        return <Login onLogin={() => this.loginHandler('isLoading')} />;
      case 'isLoading':
        setTimeout(() => this.loginHandler('isLogout'), 2000);
        return <Spinner size={50} />;
      default:
        return <Logout onLogout={() => this.loginHandler('isLogin')} />;
    }
  }
}

export default Auth;
