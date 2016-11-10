import { TASK_FILTER_DONE, TASK_FILTER_PENDING, TASK_FILTER_ALL } from '../actions/taskFilter';

const initialState = 'TASK_FILTER_ALL';

const  taskFilter = (state = initialState, action) => {
  switch (action.type) {
    case TASK_FILTER_DONE:
      return 'TASK_FILTER_DONE';
    case TASK_FILTER_PENDING:
      return 'TASK_FILTER_PENDING';
    case TASK_FILTER_ALL:
      return 'TASK_FILTER_ALL';
    default:
      return state;
  }
};

export default taskFilter;