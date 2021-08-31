import React from 'react';

const Login = ({ loginBtnHandle }) => {
  return (
    <button className="login btn" onClick={loginBtnHandle}>
      Login
    </button>
  );
};

export default Login;
