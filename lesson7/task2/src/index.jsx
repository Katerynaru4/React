import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumberList from './NumberList.jsx';

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
