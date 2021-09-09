import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Users from './Users.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/users" component={Users}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
