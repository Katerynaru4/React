import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  setTitle = (color) => {
    this.setState({
      title: color,
    });
  };
  clearTitle = () => {
    this.setState({
      title: '',
    });
  }
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setTitle('Coral')}
            onMouseOut={this.clearTitle}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.setTitle('Aqua')}
            onMouseOut={this.clearTitle}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setTitle('Bisque')}
            onMouseOut={this.clearTitle}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
