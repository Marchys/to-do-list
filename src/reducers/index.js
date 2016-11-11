import { combineReducers } from 'redux';
import tasks from './tasks';
import taskFilter from './taskFilter';
import taskSearch from './taskSearch';

export default combineReducers({
    tasks,
    taskFilter,
    taskSearch
});
