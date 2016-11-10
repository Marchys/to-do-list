import { combineReducers } from 'redux';
import tasks from './tasks';
import taskFilter from './taskFilter';

export default combineReducers({
    tasks,
    taskFilter
});
