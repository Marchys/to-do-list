import { FILTER_DONE, FILTER_PENDING, FILTER_ALL } from '../actions/filter';

const initialState = 'FILTER_ALL';

const  taskFilter = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_DONE:
      return 'FILTER_DONE';
    case FILTER_PENDING:
      return 'FILTER_PENDING';
    case FILTER_ALL:
      return 'FILTER_ALL';
    default:
      return state;
  }
};

export default taskFilter;
