import { SET_SEARCH_LOADING } from '../constants';

const initialState = false;

export default (state = initialState, action) => (
  action.type === SET_SEARCH_LOADING ? action.data : state
);
