import React from 'react';

const Logout = ({logoutBtnHandle}) => {
  return (
    <button className="logout btn" onClick={logoutBtnHandle}>
      Logout
    </button>
  );
};

export default Logout;
