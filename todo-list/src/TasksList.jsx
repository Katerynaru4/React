import React, { Component } from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';

class TasksList extends Component {
  state = {
    tasks: [{ text: 'Buy milk', done: true, id: 1 }],
  };
  render() {
    return (
      <div className="todo-list">
        <CreateTaskInput />
        <ul className="list">
          {this.state.tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
