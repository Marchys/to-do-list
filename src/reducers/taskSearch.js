import { TASK_SEARCH_TEXT } from '../actions/taskSearch';

const initialState = '';

const taskSearch = (state = initialState, action) => {
  switch (action.type) {
    case TASK_SEARCH_TEXT:
      return action.type;
    default:
      return state;
  }
};

export default taskSearch;