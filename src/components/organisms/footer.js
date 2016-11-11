import React, { Component, PropTypes } from 'react';
import { BasicButton } from '../atoms';
import { Pagination } from '../molecules';

class Footer extends Component {
  calculateStyle = (filter, id) => {
    if (filter === id) {
      return { color: 'blue' };
    }
    return { color: 'red' };
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
      <div>
        <BasicButton style={allStyle} onClick={filterAll}>All</BasicButton>
        <BasicButton style={pendingStyle} onClick={filterPending}>To do</BasicButton>
        <BasicButton style={doneStyle} onClick={filterDone}>Done</BasicButton>
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
