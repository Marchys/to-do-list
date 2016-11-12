import React, { Component, PropTypes } from 'react';
import { BasicButton, BasicInput } from '../atoms';
import './header.css';

class Header extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      searching: false
    };
  }

  renderDefault = () => {
    return (
      <div className="container">
        <h1 className="title" >The to-do list exercise</h1>
        <BasicButton className="button" onClick={() => this.setState({ searching: true })}><i className="fa fa-search" /></BasicButton>
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
      <div className="container">
        <BasicInput className="input" placeholder="Type here your search" onKeyDown={setTaskSearch} />
        <BasicButton className="button" onClick={() => this.setState({ searching: false })}><i className="fa fa-times" /></BasicButton>
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
