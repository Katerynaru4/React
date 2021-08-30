import React from 'react';

class GoodButton extends React.Component {
  HandleClick() {
    alert('Good job!');
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.HandleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
