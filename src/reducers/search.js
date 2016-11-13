import { SET_SEARCH, ENABLE_SEARCH, DISABLE_SEARCH } from '../actions/search';

const initialState = {
  term: '',
  enabled: false
};

const taskSearch = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        term: action.text
      };
    case ENABLE_SEARCH:
      return {
        ...state,
        enabled: true
      };
    case DISABLE_SEARCH:
      return {
        ...state,
        enabled: false
      };
    default:
      return state;
  }
};

export default taskSearch;
