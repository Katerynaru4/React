import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <>
    <h1>Search Form</h1>
    <div>
    <input type="text" />
    <button>Search</button>
    </div>
  </>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

