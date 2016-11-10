import { ADD_TASK } from '../actions/tasks';

const initialState = [

];

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        {
          id: state.reduce(prev => prev + 1, 0),
          done: false,
          text: action.text
        },
        ...state
      ];

    default:
      return state;
  }
}