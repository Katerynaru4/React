import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends Component {
  state = {
    isOnline: false,
  };

  reconnectHandler = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? (
          <Online />
        ) : (
          <Offline reconnectHandler={this.reconnectHandler} />
        )}
      </div>
    );
  }
}

export default Status;
