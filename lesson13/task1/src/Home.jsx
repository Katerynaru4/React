import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="page__content">
        <h1>🏠</h1>
        <Link to="/products">To products</Link>
      </div>
    );
  }
}

export default App;
