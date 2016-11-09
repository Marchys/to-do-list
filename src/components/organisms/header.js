import React, { Component } from 'react';
import { BasicButton } from '../atoms';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>The to-do list exercise o.o</h1>
        <BasicButton>search this</BasicButton>
      </div>
    );
  }
}

export default Header;
