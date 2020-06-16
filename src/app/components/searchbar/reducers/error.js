import { SET_SEARCH_ERROR } from '../constants';

const initialState = false;

export default (state = initialState, action) => (
  action.type === SET_SEARCH_ERROR ? action.data : state
);
