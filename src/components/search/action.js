import types from './types';

// Action creators for search results

export const getSearchResults = value => ({
    type: types.watchGetSearchResults,
    value
});

export const setSearchResult = results => ({
    type: types.setSearchResults,
    results
});