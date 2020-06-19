import { createSelector } from 'reselect';

export const getMoviesData = createSelector(
  (state) => state,
  (state) => state.moviesData,
);

export const getMovies = createSelector(
  getMoviesData,
  (state) => state.movies,
);

export const getMoviesError = createSelector(
  getMoviesData,
  (state) => state.moviesError,
);

export const getMoviesLoading = createSelector(
  getMoviesData,
  (state) => state.moviesLoading,
);
