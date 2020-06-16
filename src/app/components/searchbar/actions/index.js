import { FETCH_SEARCH_DATA } from '../constants';

export const fetchSearchData = (payload) => (
  {
    type: FETCH_SEARCH_DATA,
    data: payload,
  }
);
