import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const renderClock = () => {
  let seconds = new Date().getSeconds();
  let textColor = seconds % 2 === 0 ? 'black' : 'white';
  let backgroundColor = seconds % 2 === 0 ? 'white' : 'black';

  let styles = {
    color: textColor,
    backgroundColor,
  };

  let element = (
    <>
      <div className="seconds" style={styles}>
        Now is {seconds}
      </div>
    </>
  );

  ReactDOM.render(element, document.getElementById('root'));
};

setInterval(renderClock, 1000);
