export const ADD_TASK = 'ADD_TASK';
export const DO_TASK = 'DO_TASK';
export const UNDO_TASK = 'UNDO_TASK';

export const addTask = text => ({ type: ADD_TASK, text });
export const doTask = id => ({ type: DO_TASK, id });
export const undoTask = id => ({ type: UNDO_TASK, id });
