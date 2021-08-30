import React from 'react';

class GoodButton extends React.Component {
  HandleClick(e) {
    alert(e.target.textContent);
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
