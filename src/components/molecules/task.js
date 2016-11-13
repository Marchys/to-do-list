import React, { Component, PropTypes } from 'react';

class Task extends Component {
  render() {
    const { text, onClick, done, className, placeholder } = this.props;
    const style = done ? { textDecoration: 'line-through' }
      : { textDecoration: 'none' };
    const onClickTask = !placeholder ? onClick : () => { };
    return (
      <li className={className} style={style} onClick={onClickTask}>
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
  placeholder: PropTypes.bool
};

export default Task;
