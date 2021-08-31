import React, { Component } from 'react';

const Offline = ({ reconnectHandler }) => {
  return (
    <>
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={reconnectHandler}>
        Reconnect
      </button>
    </>
  );
};

export default Offline;
