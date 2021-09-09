import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="page__content">
        <h1>Contacts</h1>
        <p>We are here 🗺</p>
        <Link to="/">Go home</Link>
      </div>
    );
  }
}

export default App;
