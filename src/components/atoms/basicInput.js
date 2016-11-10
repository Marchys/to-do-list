import React, { Component, PropTypes } from 'react';

class BasicInput extends Component {
  handleOnKeyDown = (event, onkeyDown, keyName) => {
    //const keyId = event;
    if (event.key !== keyName && keyName !== void 0) {      
      return this;
    }
    onkeyDown(event);
  }

  render() {
    const { onChange, onKeyDown, keyName, placeholder } = this.props;
    const onKeyDownPartial = event => this.handleOnKeyDown(event, onKeyDown, keyName);
    return (
      <input onChange={onChange} onKeyDown={onKeyDownPartial} placeholder={placeholder} />
    );
  }
}

BasicInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  onKeyDown: PropTypes.func,
  keyName: PropTypes.string
};


export default BasicInput;
