import React, { Component, PropTypes } from 'react';
import { Task, TaskIntroducer } from '../molecules';
import './whitePaper.css';

class TaskHolder extends Component {
  render() {
    const { tasks, doTask, undoTask, addTask } = this.props;
    return (
      <div className="whitePaper">
        <div className="taskIntroducerContainer">
          <div className="invisibleBlock" />
          <TaskIntroducer className="taskIntroducer" addTask={addTask} />
        </div>
        <ul className="taskUl">
          {tasks.map((task) =>
            <div key={task.id} className="taskContainer" >
              <div className="invisibleBlock">
              </div>
              <Task
                className="task"
                text={task.text}
                done={task.done}
                placeholder={task.placeholder}
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
  addTask: PropTypes.func.isRequired
};

export default TaskHolder;
