export const TASK_FILTER_DONE = 'TASK_FILTER_DONE';
export const TASK_FILTER_PENDING = 'TASK_FILTER_PENDING';
export const TASK_FILTER_ALL = 'TASK_FILTER_ALL';

export const filterDone = filterType => ({ type: TASK_FILTER_DONE });
export const filterPending = filterType => ({ type: TASK_FILTER_PENDING });
export const filterAll = filterType => ({ type: TASK_FILTER_ALL });