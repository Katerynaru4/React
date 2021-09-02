import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  offlineListenerHandle = () => {
    this.setState({
      status: 'offline',
    });
  };
  onlineListenerHandle = () => {
    this.setState({
      status: 'online',
    });
  };
  componentDidMount() {
    this.offlineEventListener = window.addEventListener(
      'offline',
      this.offlineListenerHandle
    );
    this.onlineEventListener = window.addEventListener(
      'online',
      this.onlineListenerHandle
    );
  }

  componentWillUnmount() {
    this.offlineEventListener.removeEventListener(
      'offline',
      offlineListenerHandle
    );
    this.onlineEventListener.removeEventListener(
      'online',
      onlineListenerHandle
    );
  }
  render() {
    return (
      <div
        className={`status ${
          this.state.status === 'offline' && 'status_offline'
        }`}
      >
        {this.state.status}
      </div>
    );
  }
}
export default ConnectionStatus;
