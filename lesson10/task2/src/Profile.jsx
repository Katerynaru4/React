import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = ({ userData, handleChange }) => {
  console.log(userData);
  return (
    <div className="column">
      <UserForm
        userData={{
          firstName: userData.firstName,
          lastName: userData.lastName,
        }}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Profile;
