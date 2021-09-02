import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('offline', () => {
      this.setState({
        status: 'offline',
      });
    });
    window.addEventListener('online', () => {
      this.setState({
        status: 'online',
      });
    });
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
