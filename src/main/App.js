import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, WhitePaper, Footer } from '../components/organisms';
import './App.css';
import * as taskActions from '../actions/tasks';
import * as filterActions from '../actions/filter';
import * as searchActions from '../actions/search';
import * as paginationActions from '../actions/pagination';

const actions = Object.assign({}, filterActions, taskActions, searchActions, paginationActions);
const selector = state => ({
  tasks: state.tasks,
  filter: state.filter,
  search: state.search,
  pagination: state.pagination,
});

/**
  * @function App#applyFilter Applies a filter over an array of tasks.
  * @param {array} tasks - array of tasks
  * @param {string} filter - the corresponding array filter
  * @return {array} The tasks after applying the corresponding filter.
  */
const applyFilter = (tasks, filter) => {
  switch (filter) {
    case 'FILTER_ALL':
      return tasks;
    case 'FILTER_DONE':
      return tasks.filter(task => task.done);
    case 'FILTER_PENDING':
      return tasks.filter(task => !task.done);
    default:
      return tasks;
  }
};

/**
  * @function App#applySearch Applies a search over the tasks
  * @param {array} tasks - array of tasks
  * @param {string} term - the term to search
  * @return {array} The tasks that pass the search
  */
const applySearch = (tasks, term) => {
  return tasks.filter(task => task.text.toLowerCase().includes(term.toLowerCase()));
};

/**
  * @function App#applyPagination Applies a pagination over the tasks
  * @param {array} tasks - array of tasks
  * @param {number} pageAmount - amount of pages
  * @param {number} page - current page
  * @param {number} itemsPerPage
  * @return {array} The tasks that correspond to the current page
  */
const applyPagination = (tasks, pageAmount, page, itemsPerPage) => {
  const lowerLimit = page * itemsPerPage;
  const upperLimit = lowerLimit + itemsPerPage;  
  return tasks.filter((_, index) => {
    if (index >= lowerLimit && index < upperLimit) {
      return true;
    }
    return false;
  });
};

/**
  * @function App#getEnabledTasks Passes multiple filters
  * @param {array} tasks - array of tasks
  * @param {number} filter
  * @param {number} term
  * @return {array} all the tasks enabled after passing the filter and search
*/
const getEnabledTasks = (tasks, filter, term) => {
  const filteredTasks = applyFilter(tasks, filter);
  const searchedTasks = applySearch(filteredTasks, term);
  return searchedTasks;
};

/**
  * @function App#isPagePossible Calculates if the current page is possible
  * @param {number} page
  * @param {number} pageAmount
  * @return {boolean}
*/
const isPagePossible = (page, pageAmount) => {
return (page + 1) <= pageAmount;
};

/**
  * @function App#getPageAmount Calculates the page amount
  * @param {array} tasks
  * @param {number} itemsPerPage
  * @return {number}
*/
const getPageAmount = (tasks, itemsPerPage) => {
  return Math.ceil(tasks.length / itemsPerPage);
};

/**
  * @function App#addPlaceholderTasks adds placeholderTasks to complete the task list
  * @param {array} tasks
  * @param {number} itemsPerPage
  * @return {array}
*/
const addPlaceholderTasks = (tasks, itemsPerPage) => {
  if (tasks.length === itemsPerPage) {
    return tasks;
  }
  const amountPlaceholder = itemsPerPage - tasks.length;
  const idLastTask = tasks[0] !== void 0 ? tasks[0].id : 0;
  const placeholderItems = Array.from(new Array(amountPlaceholder), (_, index) => {
    return {
      id: (index + 1) + idLastTask,
      done: false,
      text: '',
      placeholder: true
    };
  });
  return [...tasks, ...placeholderItems];
};

class App extends Component {
  render() {
    const { tasks, filter, search, pagination } = this.props;
    // gets all the tasks that will be visible in some way
    const enabledTasks = getEnabledTasks(tasks, filter, search.term);
    // calculate the pagination
    const pageAmount = getPageAmount(enabledTasks, pagination.itemsPerPage);
    const calculatedPage = isPagePossible(pagination.page, pageAmount) ?
    pagination.page : pageAmount - 1;
    const paginatedTasks = applyPagination(enabledTasks, pageAmount, calculatedPage, pagination.itemsPerPage);
    // adds the placeholder tasks to get a total equal to items per page
    const placeholderedTasks = addPlaceholderTasks(paginatedTasks, pagination.itemsPerPage);
    return (
      <div className="App">
        <Header 
          setSearch={this.props.setSearch}
          enableSearch={this.props.enableSearch}
          disableSearch={this.props.disableSearch}
          enabled={this.props.search.enabled}
        />
        <WhitePaper 
          tasks={placeholderedTasks}
          doTask={this.props.doTask}
          undoTask={this.props.undoTask}
          addTask={this.props.addTask}
        />
        <Footer
          filter={filter}
          filterAll={this.props.filterAll}
          filterPending={this.props.filterPending}
          filterDone={this.props.filterDone}
          setPage={this.props.setPage}
          pageAmount={pageAmount}
          page={calculatedPage}
        />
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  search: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired,
  addTask: PropTypes.func.isRequired,
  filterAll: PropTypes.func.isRequired,
  filterPending: PropTypes.func.isRequired,
  filterDone: PropTypes.func.isRequired,
  doTask: PropTypes.func.isRequired,
  undoTask: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  enableSearch: PropTypes.func.isRequired,
  disableSearch: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
};

const appConnected = connect(selector, actions)(App);
export default appConnected;
