import { createSelector } from 'reselect';

export const getCarouselData = createSelector(
    (state) => state,
    (state) => state.carouselData,
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
