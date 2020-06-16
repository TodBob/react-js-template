import { createSelector } from 'reselect';

export const getSearchData = createSelector(
  (state) => state,
  (state) => state.searchData,
);

export const getSearchLoading = createSelector(
  getSearchData,
  (state) => state.searchLoading,
);

export const getSearchError = createSelector(
  getSearchData,
  (state) => state.searchError,
);

export const getSearchResults = createSelector(
  getSearchData,
  (state) => state.searchResults,
);
