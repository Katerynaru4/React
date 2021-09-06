import React from 'react';
import PropTypes from 'prop-types';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, faChevronUp);
library.add(fas, faChevronDown);

dom.watch();

const Expand = ({ isOpen, onToggle, children, title }) => {

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToggle}>
          {isOpen ? (
            <FontAwesomeIcon icon="chevron-up" />
          ) : (
            <FontAwesomeIcon icon="chevron-down" />
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
