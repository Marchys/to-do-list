import React, { Component, PropTypes } from 'react';
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

  handleEventTask = (event, setTaskSearch) => {
    const target = event.target;
    // wait until the end of loop for value change
    setTimeout(() => {
      const text = target.value;
      setTaskSearch(text);
    }, 0);
  }

  renderSearching = (setTaskSearch) => {
    return (
      <div>
        <h1>The to-do list exercise o.o</h1>
        <BasicInput onKeyDown={setTaskSearch} />
        <BasicButton onClick={() => this.setState({ searching: false })}>close</BasicButton>
      </div>
    );
  }

  render() {
    const { setTaskSearch } = this.props;
    const partialSetTaskSearch = event => this.handleEventTask(event, setTaskSearch);
    return !this.state.searching ? this.renderDefault() : this.renderSearching(partialSetTaskSearch);
  }
}

Header.propTypes = {
  setTaskSearch: PropTypes.func.isRequired,
};

export default Header;
