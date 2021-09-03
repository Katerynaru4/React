import React, { Component } from 'react';
import UserForm from './UserForm.jsx';
 
const App = () => {
  const createUser = (user) => {
    console.log(user);
  };
  return <UserForm onSubmit={createUser} />;
};

export default App;
