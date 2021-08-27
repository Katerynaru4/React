import React from 'react';

const getYears = (birthDate) =>
  Math.trunc((new Date() - new Date(birthDate)) / (365 * 24 * 60 * 60 * 1000));

const Greeting = (props) => {
  const years = getYears(props.birthDate);

  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {years} years old
    </div>
  );
};

export default Greeting;
