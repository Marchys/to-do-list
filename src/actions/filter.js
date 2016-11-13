export const FILTER_DONE = 'FILTER_DONE';
export const FILTER_PENDING = 'FILTER_PENDING';
export const FILTER_ALL = 'FILTER_ALL';

export const filterDone = filterType => ({ type: FILTER_DONE });
export const filterPending = filterType => ({ type: FILTER_PENDING });
export const filterAll = filterType => ({ type: FILTER_ALL });
