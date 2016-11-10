import React, { Component, PropTypes } from 'react';

class Task extends Component {
  render() {
    const { text, onClick, done } = this.props;
    const style = done ? { color: 'gray' } : { color: 'black' };
    return (
      <li style={style} onClick={onClick}>
        {text}
      </li>
    );
  }
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired  
};

export default Task;
