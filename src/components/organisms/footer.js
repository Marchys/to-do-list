import React, { Component, PropTypes } from 'react';
import { BasicButton } from '../atoms';

class Footer extends Component {
  calculateStyle = (filter, id) => {
    if (filter === id) {
      return { color: 'blue' };
    }
    return { color: 'red' };
  }
  render() {
    const { taskFilter, filterAll, filterPending, filterDone } = this.props;
    const pendingStyle = this.calculateStyle(taskFilter, 'TASK_FILTER_PENDING');
    const allStyle = this.calculateStyle(taskFilter, 'TASK_FILTER_ALL');
    const doneStyle = this.calculateStyle(taskFilter, 'TASK_FILTER_DONE');
    return (
      <div>
        <BasicButton style={allStyle} onClick={filterAll}>All</BasicButton>
        <BasicButton style={pendingStyle} onClick={filterPending}>To do</BasicButton>
        <BasicButton style={doneStyle} onClick={filterDone}>Done</BasicButton>
      </div>
    );
  }
}

Footer.propTypes = {
  filterAll: PropTypes.func.isRequired,
  filterPending: PropTypes.func.isRequired,
  filterDone: PropTypes.func.isRequired,
  taskFilter: PropTypes.string.isRequired
};

export default Footer;
