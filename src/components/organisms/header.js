import React, { Component, PropTypes } from 'react';
import { BasicButton, BasicInput } from '../atoms';
import './header.css';

class Header extends Component {
  handleEventTask = (event, setSearch) => {
    const target = event.target;
    // wait until the end of loop for value change
    setTimeout(() => {
      const text = target.value;
      setSearch(text);
    }, 0);
  }

  renderSearching = (setSearch, disableSearch) => {
    return (
      <div className="header">
        <BasicInput className="input-search" placeholder="Type here your search" onKeyDown={setSearch} />
        <BasicButton
          className="search-button"
          onClick={disableSearch}
        >
          <i className="fa fa-times" />
        </BasicButton>
      </div>
    );
  }

  renderDefault = (enableSearch) => {
    return (
      <div className="header">
        <h1 className="header-title" >The to-do list exercise</h1>
        <BasicButton
          className="search-button"
          onClick={enableSearch}
        >
          <i className="fa fa-search" />
        </BasicButton>
      </div>
    );
  }


  render() {
    const { setSearch, enabled, enableSearch, disableSearch } = this.props;
    const partialSetSearch= event => this.handleEventTask(event, setSearch);
    return !enabled ? this.renderDefault(enableSearch) : this.renderSearching(partialSetSearch, disableSearch);
  }
}

Header.propTypes = {
  setSearch: PropTypes.func.isRequired,
  enableSearch: PropTypes.func.isRequired,
  disableSearch: PropTypes.func.isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default Header;
