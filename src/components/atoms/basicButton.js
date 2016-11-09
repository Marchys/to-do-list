import React, { Component, PropTypes } from 'react';

class BasicButton extends Component {
  render() {
    const { children } = this.props;
    return (
      <button>
        { children }
      </button>
    );
  }
}

BasicButton.propTypes = {
  children: PropTypes.any,
};


export default BasicButton;
