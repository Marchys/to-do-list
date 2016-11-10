import { ADD_TASK, DO_TASK, UNDO_TASK } from '../actions/tasks';

const initialState = [

];

const tasks = (state = initialState, action) => {
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
    case DO_TASK:
    console.log('ho');
    console.log(action.id);
      return state.map(task => {
        if(action.id !== task.id){
          return task;
        }
        return {
          ...task,
          done: true
        };
      });
    case UNDO_TASK:
      return state.map(task => {
        if(action.id !== task.id){
          return task;
        }
        return {
          ...task,
          done: false
        };
      });
    default:
      return state;
  }
};

export default tasks;