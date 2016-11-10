import React, { Component, PropTypes } from 'react';

class BasicButton extends Component {
  render() {
    const { children, onClick, style } = this.props;
    return (
      <button onClick={onClick} style={style}>
        {children}
      </button>
    );
  }
}

BasicButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  style: PropTypes.object
};


export default BasicButton;
