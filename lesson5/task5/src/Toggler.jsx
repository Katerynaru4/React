import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnState: 'Off',
    };
  }
  setBtnState = () => {
    this.setState({
      btnState: this.state.btnState === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.setBtnState}>
        {this.state.btnState}
      </button>
    );
  }
}

export default Toggler;
