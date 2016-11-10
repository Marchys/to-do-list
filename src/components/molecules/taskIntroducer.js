import React, { Component, PropTypes } from 'react';
import { BasicInput } from '../atoms';

class TaskIntroducer extends Component {
  handleEventTask = (event, handleTask) => {
    const text = event.target.value;
    handleTask(text);
  }
  render() {
    const { addTask } = this.props;
    const partialAddTask = event => this.handleEventTask(event, addTask);
    return (
      <div>
        <BasicInput keyName="Enter" onKeyDown={partialAddTask} />
      </div>
    );
  }
}

TaskIntroducer.propTypes = {
  addTask: PropTypes.func,
};

export default TaskIntroducer;
