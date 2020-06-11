import { SET_MOVIES_LOADING } from '../constants/index';

const initialState = false;

export default (state = initialState, action) => (
    action.type === SET_MOVIES_LOADING ? action.data : state
);