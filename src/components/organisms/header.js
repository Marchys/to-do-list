import React, { Component } from 'react';
import { BasicButton, BasicInput } from '../atoms';

class Header extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      searching: false
    };
  }

  renderDefault = () => {
    return (
      <div>
        <h1>The to-do list exercise o.o</h1>
        <BasicButton onClick={() => this.setState({ searching: true })}>search</BasicButton>
      </div>
    );
  }

  renderSearching = () => {
    return (
      <div>
        <h1>The to-do list exercise o.o</h1>
        <BasicInput />
        <BasicButton onClick={() => this.setState({ searching: false })}>close</BasicButton>
      </div>
    );
  }

  render() {
    return !this.state.searching ? this.renderDefault() : this.renderSearching();
  }
}

export default Header;
