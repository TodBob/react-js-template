import { createSelector } from 'reselect';

export const getMoviesData = createSelector(
  (state) => state,
  (state) => state.moviesData,
);

/*
export const getCarouselError = createSelector(
    getCarouselData,
    (state) => state.error,
);
export const getCarouselLoading = createSelector(
    getCarouselData,
    (state) => state.loading,
);
*/
