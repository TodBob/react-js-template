import { SET_MOVIES_DATA } from '../constants/index';

const initialState = [];

export default (state = initialState, action) => (
  action.type === SET_MOVIES_DATA ? action.data : state
);
