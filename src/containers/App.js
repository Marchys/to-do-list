import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, TaskHolder, Footer } from '../components/organisms';
import { TaskIntroducer } from '../components/molecules';
import './App.css';
import * as taskActions from '../actions/tasks';
import * as taskFilterActions from '../actions/taskFilter';
import * as taskSearchActions from '../actions/taskSearch';
import * as paginationActions from '../actions/pagination';

const actions = Object.assign({}, taskFilterActions, taskActions, taskSearchActions, paginationActions);
const selector = state => ({
  tasks: state.tasks,
  taskFilter: state.taskFilter,
  taskSearch: state.taskSearch,
  pagination: state.pagination,
});

const applyFilter = (tasks, filter) => {
  switch (filter) {
    case 'TASK_FILTER_ALL':
      return tasks;
    case 'TASK_FILTER_DONE':
      return tasks.filter(task => task.done);
    case 'TASK_FILTER_PENDING':
      return tasks.filter(task => !task.done);
    default:
      return tasks;
  }
};

const applySearch = (tasks, taskSearch) => {
  return tasks.filter(task => task.text.includes(taskSearch));
};

const applyPagination = (tasks, pagination) => {
  return tasks.filter((_, index) => {
    const lowerLimit = pagination.page * pagination.itemsPerPage;
    const upperLimit = lowerLimit + pagination.itemsPerPage;
    if (index >= lowerLimit && index < upperLimit) {
      return true;
    }
    return false;
  });
};

const getEnabledTasks = (tasks, filter, taskSearch) => {
  const filteredTasks = applyFilter(tasks, filter);
  const searchedTasks = applySearch(filteredTasks, taskSearch);
  return searchedTasks;
};


const getPageAmount = (tasks, itemsPerPage) => {
  return Math.ceil(tasks.length/itemsPerPage);
};

class App extends Component {
  render() {
    const { tasks, taskFilter, taskSearch, pagination } = this.props;
    const enabledTasks = getEnabledTasks(tasks, taskFilter, taskSearch);
    const pageAmount = getPageAmount(enabledTasks, pagination.itemsPerPage);
    const paginatedTasks = applyPagination(enabledTasks, pagination);
    return (
      <div className="App">
        <Header setTaskSearch={this.props.setTaskSearch} />
        <TaskIntroducer addTask={this.props.addTask} />
        <TaskHolder
          tasks={paginatedTasks}
          doTask={this.props.doTask}
          undoTask={this.props.undoTask}
        />
        <Footer
          taskFilter={taskFilter}
          filterAll={this.props.filterAll}
          filterPending={this.props.filterPending}
          filterDone={this.props.filterDone}
          setPage={this.props.setPage}
          pageAmount={pageAmount}
          page={pagination.page}
        />
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  taskFilter: PropTypes.string.isRequired,
  taskSearch: PropTypes.string.isRequired,
  pagination: PropTypes.object.isRequired,
  addTask: PropTypes.func.isRequired,
  filterAll: PropTypes.func.isRequired,
  filterPending: PropTypes.func.isRequired,
  filterDone: PropTypes.func.isRequired,
  doTask: PropTypes.func.isRequired,
  undoTask: PropTypes.func.isRequired,
  setTaskSearch: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
};

const appConnected = connect(selector, actions)(App);
export default appConnected;
