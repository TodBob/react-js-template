import { FETCH_MOVIES_DATA } from '../constants';

export const fetchMoviesData = (payload) => (
  {
    type: FETCH_MOVIES_DATA,
    data: payload,
  }
);
