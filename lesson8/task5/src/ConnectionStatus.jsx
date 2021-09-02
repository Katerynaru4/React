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
    window.addEventListener('offline', this.offlineListenerHandle);
    window.addEventListener('online', this.onlineListenerHandle);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.offlineListenerHandle);
    window.removeEventListener('online', this.onlineListenerHandle);
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
