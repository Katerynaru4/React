import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Search from './Search.jsx';

const RenderElement = () => {
  return <Search name="Tom" />;
};

ReactDOM.render(<RenderElement />, document.getElementById('root'));
