import React, { Component } from 'react';
import UsersList from './UsersList.jsx';
 
const users = [
  {
    name: 'user1',
    age: 13,
    id: 'id_1',
  },
  {
    name: 'user2',
    age: 23,
    id: 'id_2',
  },
  
  {
    name: 'user3',
    age: 36,
    id: 'id_3',
  },
];
const App = () => {
 
  return <UsersList users={users} />;
};

export default App;
