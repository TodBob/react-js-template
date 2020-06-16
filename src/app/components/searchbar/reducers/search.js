import { SET_SEARCH_DATA } from '../constants';

const initialState = null;

export default (state = initialState, action) => (
  action.type === SET_SEARCH_DATA ? action.data : state
);
