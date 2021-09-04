import React from 'react';
import UsersList from './UsersList.jsx';
 
const users = [
  {
    name: '1user',
    age: 13,
    id: 'id_1',
  },
  {
    name: '21user',
    age: 23,
    id: 'id_2',
  },
  
  {
    name: '3user',
    age: 36,
    id: 'id_3',
  },
];
const App = () => {
 
  return <UsersList users={users} />;
};

export default App;
