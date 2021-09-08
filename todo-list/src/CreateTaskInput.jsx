import React, { Component } from 'react';

class CreateTaskInput extends Component {
  render() {
    return (
      <div className="create-task">
        <input className="create-task__input" type="text" />
        <button className="btn create-task__btn">Create</button>
      </div>
    );
  }
}

export default CreateTaskInput;
