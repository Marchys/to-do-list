import React, { Component, PropTypes } from 'react';

class BasicInput extends Component {
  handleOnKeyDown = (event, onkeyDown, keyName) => {
    if (event.key !== keyName && keyName !== void 0) {      
      return this;
    }
    onkeyDown(event);
  }

  render() {
    const { onChange, onKeyDown, keyName, placeholder, className } = this.props;
    const onKeyDownPartial = event => this.handleOnKeyDown(event, onKeyDown, keyName);
    return (
      <input className={className} onChange={onChange} onKeyDown={onKeyDownPartial} placeholder={placeholder} />
    );
  }
}

BasicInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  onKeyDown: PropTypes.func,
  keyName: PropTypes.string,
  className: PropTypes.string
};


export default BasicInput;
