import { combineReducers } from 'redux';
import tasks from './tasks';
import filter from './filter';
import search from './search';
import pagination from './pagination';

export default combineReducers({
    tasks,
    filter,
    search,
    pagination
});
