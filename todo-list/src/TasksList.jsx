import React, { Component } from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import {
  createTask,
  fetchTasksList,
  UpdateTask,
  deleteTask,
} from './tasksGateway.jsx';

class TasksList extends Component {
  state = {
    tasks: [],
  };
  fetchTasks = () => {
    fetchTasksList().then((tasksList) => {
      this.setState({
        tasks: tasksList,
      });
    });
  };
  componentDidMount() {
    this.fetchTasks();
  }

  onCreate = (value) => {
    const taskData = {
      text: value,
      done: false,
    };
    createTask(taskData).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const taskData = {
      text,
      done: !done,
    };
    UpdateTask(id, taskData).then(() => {
      this.fetchTasks();
    });
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => {
      this.fetchTasks();
    });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
