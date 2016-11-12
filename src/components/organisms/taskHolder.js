import React, { Component, PropTypes } from 'react';
import { Task } from '../molecules';
import './taskHolder.css';

class TaskHolder extends Component {
  render() {
    const { tasks, doTask, undoTask } = this.props;
    return (
      <div>
        <ul className="taskUl">
          {tasks.map((task) =>
            <div key={task.id} className="taskContainer" >
              <div className="invisibleBlock">
              </div>
              <Task
                className="task"
                text={task.text}
                done={task.done}
                onClick={task.done ?
                  undoTask.bind(void 0, task.id) : doTask.bind(void 0, task.id)}
              />
            </div>
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
