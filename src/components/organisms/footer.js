import React, { Component, PropTypes } from 'react';
import { BasicButton } from '../atoms';
import { Pagination } from '../molecules';
import './footer.css';

class Footer extends Component {
  calculateStyle = (filter, id) => {
    if (filter === id) {
      return { color: '#838383' };
    }
    return { color: '#AAAAAA' };
  }
  render() {
    const {
      taskFilter,
      filterAll,
      filterPending,
      filterDone,
      setPage,
      pageAmount,
      page } = this.props;
    const pendingStyle = this.calculateStyle(taskFilter, 'TASK_FILTER_PENDING');
    const allStyle = this.calculateStyle(taskFilter, 'TASK_FILTER_ALL');
    const doneStyle = this.calculateStyle(taskFilter, 'TASK_FILTER_DONE');
    return (
      <div className="footer">
        <BasicButton className="filterButton" style={allStyle} onClick={filterAll}>All</BasicButton>
        <BasicButton className="filterButton" style={pendingStyle} onClick={filterPending}>To do</BasicButton>
        <BasicButton className="filterButton" style={doneStyle} onClick={filterDone}>Done</BasicButton>
        <Pagination pageAmount={pageAmount} currentPage={page} setPage={setPage}/>
      </div>
    );
  }
}

Footer.propTypes = {
  pageAmount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  filterAll: PropTypes.func.isRequired,
  filterPending: PropTypes.func.isRequired,
  filterDone: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  taskFilter: PropTypes.string.isRequired
};

export default Footer;
