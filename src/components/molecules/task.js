import React, { Component, PropTypes } from 'react';

class Task extends Component {
  render() {
    const { text, onClick, done, className } = this.props;
    const style = done ? { textDecoration: 'line-through' } 
    : { textDecoration: 'none' };
    return (
      <li className={className} style={style} onClick={onClick}>
        {text}
      </li>
    );
  }
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default Task;
