import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, TaskHolder, Footer } from '../components/organisms';
import { TaskIntroducer } from '../components/molecules';
import './App.css';
import * as taskActions from '../actions/tasks';
import * as taskFilterActions from '../actions/taskFilter';
import * as taskSearchActions from '../actions/taskSearch';

const actions = Object.assign({}, taskFilterActions, taskActions, taskSearchActions);
const selector = state => ({
  tasks: state.tasks,
  taskFilter: state.taskFilter,
  taskSearch: state.taskSearch
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

const getVisibleTasks = (tasks, filter, taskSearch) => {
  const filteredTasks = applyFilter(tasks, filter);
  const searchedTasks = applySearch(filteredTasks, taskSearch);
  return searchedTasks;
};

class App extends Component {
  render() {
    const { tasks, taskFilter, taskSearch } = this.props;
    const visibleTasks = getVisibleTasks(tasks, taskFilter, taskSearch);
    return (
      <div className="App">
        <Header setTaskSearch={this.props.setTaskSearch}/>
        <TaskIntroducer addTask={this.props.addTask} />
        <TaskHolder
          tasks={visibleTasks}
          doTask={this.props.doTask}
          undoTask={this.props.undoTask}
        />
        <Footer
          taskFilter={taskFilter}
          filterAll={this.props.filterAll}
          filterPending={this.props.filterPending}
          filterDone={this.props.filterDone}
        />
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  taskFilter: PropTypes.string.isRequired,
  taskSearch: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
  filterAll: PropTypes.func.isRequired,
  filterPending: PropTypes.func.isRequired,
  filterDone: PropTypes.func.isRequired,
  doTask: PropTypes.func.isRequired,
  undoTask: PropTypes.func.isRequired,
  setTaskSearch: PropTypes.func.isRequired,
};

const appConnected = connect(selector, actions)(App);
export default appConnected;
