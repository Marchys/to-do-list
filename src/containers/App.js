import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, TaskHolder } from '../components/organisms';
import { TaskIntroducer } from '../components/molecules';
import './App.css';
import * as taskActions from '../actions/tasks';

class App extends Component {
  render() {
    const { tasks, actions } = this.props;
    return (
      <div className="App">
        <Header />
        <TaskIntroducer addTask={actions.addTask}/> 
        <TaskHolder tasks={tasks} actions={actions}/>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(taskActions, dispatch)
});

const appConnected = connect(mapStateToProps, mapDispatchToProps)(App);
export default appConnected;
