import { SET_PAGE, SET_ITEMS_PER_PAGE } from '../actions/pagination';

const initialState = {
  page: 0,
  itemsPerPage: 6
};

const taskSearch = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.id
      };
    case SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: action.num
      };
    default:
      return state;
  }
};

export default taskSearch;