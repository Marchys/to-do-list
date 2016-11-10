import React, { Component, PropTypes } from 'react';
import { Task } from '../molecules';

class TaskHolder extends Component {
  render() {
    const { tasks, actions } = this.props;
    return (
      <div>
        <ul>
          {tasks.map((task) =>
            <Task text={task.text} key={task.id} />
          )}
        </ul>
      </div>
    );
  }
}

TaskHolder.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default TaskHolder;
