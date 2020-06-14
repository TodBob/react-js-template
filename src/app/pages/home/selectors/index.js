import { createSelector } from 'reselect';

export const getMoviesData = createSelector(
  (state) => state,
  (state) => state.moviesData,
);

export const getMovies = createSelector(
  getMoviesData,
  (state) => state.movies,
);
