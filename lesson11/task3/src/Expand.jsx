import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToggle}>
          {isOpen ? (
            <i className="material-icons">arrow_drop_up</i>
          ) : (
            <i className="material-icons">arrow_drop_down</i>
          )}
        </button>
      </div>
      {isOpen ? <div className="expand__content">{children}</div> : null}
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
