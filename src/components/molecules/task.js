import React, { Component, PropTypes } from 'react';

class Task extends Component {
  render() {
    const { text } = this.props;
    return (
      <li>
        {text}
      </li>
    );
  }
}

Task.propTypes = {
  text: PropTypes.string
};

export default Task;
