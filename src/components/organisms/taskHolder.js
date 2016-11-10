import React, { Component, PropTypes } from 'react';
import { Task } from '../molecules';

class TaskHolder extends Component {
  render() {
    const { tasks, doTask, undoTask } = this.props;
    return (
      <div>
        <ul>
          {tasks.map((task) =>
            <Task 
            text={task.text} 
            done={task.done}
            key={task.id}
            onClick={task.done ?
              undoTask.bind(void 0, task.id) : doTask.bind(void 0, task.id)}
            />
          )}
        </ul>
      </div>
    );
  }
}

TaskHolder.propTypes = {
  tasks: PropTypes.array.isRequired,
  doTask: PropTypes.func.isRequired,
  undoTask: PropTypes.func.isRequired,
};

export default TaskHolder;
