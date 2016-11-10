import React, { Component, PropTypes } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, TaskHolder, Footer } from '../components/organisms';
import { TaskIntroducer } from '../components/molecules';
import './App.css';
import * as taskActions from '../actions/tasks';
import * as taskFilterActions from '../actions/taskFilter';

const actions = Object.assign({}, taskFilterActions, taskActions);
const selector = state => ({
  tasks: state.tasks,
  taskFilter: state.taskFilter
});

const getVisibleTasks = (tasks, filter) => {
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

class App extends Component {
  render() {
    const { tasks, taskFilter } = this.props;
    const visibleTasks = getVisibleTasks(tasks, taskFilter);
    return (
      <div className="App">
        <Header />
        <TaskIntroducer addTask={this.props.addTask}/> 
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
  addTask: PropTypes.func.isRequired,
  filterAll: PropTypes.func.isRequired,
  filterPending: PropTypes.func.isRequired,
  filterDone: PropTypes.func.isRequired,
  doTask: PropTypes.func.isRequired,
  undoTask: PropTypes.func.isRequired,
};

const appConnected = connect(selector, actions)(App);
export default appConnected;
