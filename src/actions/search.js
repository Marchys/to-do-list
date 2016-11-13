export const SET_SEARCH = 'SET_SEARCH';
export const ENABLE_SEARCH = 'ENABLE_SEARCH';
export const DISABLE_SEARCH = 'DISABLE_SEARCH';

export const setSearch = text => ({ type: SET_SEARCH, text });
export const enableSearch = () => ({ type: ENABLE_SEARCH });
export const disableSearch = () => ({ type: DISABLE_SEARCH });
