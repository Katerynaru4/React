import React from 'react';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
} from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faChevronUp, faChevronDown);

const Expand = ({ isOpen, onToggle, children, title }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToggle}>
          {isOpen ? (
            <FontAwesomeIcon icon="chevron-down" />
          ) : (
            <FontAwesomeIcon icon="chevron-up" />
          )}
        </button>
      </div>
      <div className="expand__content">{isOpen ? children : null}</div>
    </div>
  );
};

Expand.PropTypes = {
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
