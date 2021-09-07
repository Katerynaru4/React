import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggleBtnHandle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    const { title, children } = { ...this.props };

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button
            className="expand__toggle-btn"
            onClick={() => this.toggleBtnHandle()}
          >
            {this.state.isOpen ? (
              <i className="material-icons">arrow_drop_up</i>
            ) : (
              <i className="material-icons">arrow_drop_down</i>
            )}
          </button>
        </div>
        {this.state.isOpen ? (
          <div className="expand__content">{children}</div>
        ) : null}
      </div>
    );
  }
}

Expand.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Expand.defaultProps = {
  title: '',
};

export default Expand;
