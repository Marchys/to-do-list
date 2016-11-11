import { SET_TASK_SEARCH_TEXT } from '../actions/taskSearch';

const initialState = '';

const taskSearch = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_SEARCH_TEXT:
      return action.text;
    default:
      return state;
  }
};

export default taskSearch;
