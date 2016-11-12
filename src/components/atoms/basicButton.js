import React, { Component, PropTypes } from 'react';

class BasicButton extends Component {
  render() {
    const { children, onClick, className } = this.props;
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
}

BasicButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string
};


export default BasicButton;
