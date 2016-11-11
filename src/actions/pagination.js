export const SET_PAGE = 'SET_PAGE';
export const SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE';

export const setPage = id => ({ type: SET_PAGE, id });
export const setItemsPerPage = num => ({ type: SET_ITEMS_PER_PAGE, num });
