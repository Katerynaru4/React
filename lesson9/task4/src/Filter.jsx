import React from 'react';

const Filter = ({ filterText, count, onChange }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        name="searchValue"
        onChange={onChange}
        value={filterText}
      />
    </div>
  );
};

export default Filter;
