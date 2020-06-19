import { SET_MOVIES_ERROR } from '../constants/index';

const initialState = false;

export default (state = initialState, action) => (
  action.type === SET_MOVIES_ERROR ? action.data : state
);
