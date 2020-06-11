import { FETCH_TEST_STATE } from '../constants';

export const fetchTestState = (payload) => (
  {
    type: FETCH_TEST_STATE,
    data: payload,
  }
);
