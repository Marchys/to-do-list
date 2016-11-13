import React, { Component, PropTypes } from 'react';
import { BasicInput } from '../atoms';

class TaskIntroducer extends Component {
  handleEventTask = (event, handleTask) => {
    const text = event.target.value;
    event.target.value = '';
    // not trigger the action if user enters an empty task
    if(text !== ''){
    handleTask(text);
    }
  }
  render() {
    const { addTask, className } = this.props;
    const partialAddTask = event => this.handleEventTask(event, addTask);
    return (
      <BasicInput className={className} keyName="Enter" placeholder="Type a new task and press [ENTER]" onKeyDown={partialAddTask} />
    );
  }
}

TaskIntroducer.propTypes = {
  addTask: PropTypes.func,
  className: PropTypes.string,
};

export default TaskIntroducer;
