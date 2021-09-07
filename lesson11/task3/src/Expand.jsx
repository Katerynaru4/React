import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isOpen, onToggle, children, title }) => {

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToggle}>
          {isOpen ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </button>
      </div>
      <div className="expand__content">{isOpen ? children : null}</div>
    </div>
  );
};

Expand.propTypes = {
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Expand.defaultProps = {
  isOpen: false,
  title: '',
};

export default Expand;
