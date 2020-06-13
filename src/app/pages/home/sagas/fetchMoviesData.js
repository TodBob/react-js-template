import { put } from 'redux-saga/effects';
import { BASE_API } from '../../../../http/api';
import {
  SET_MOVIES_LOADING,
  SET_MOVIES_ERROR,
  SET_MOVIES_DATA,
} from '../constants';

export function* fetchMoviesData({ data }) {
  yield put({ type: SET_MOVIES_LOADING, data: true });
  yield put({ type: SET_MOVIES_ERROR, data: false });
  try {
    const response = yield fetch(`${BASE_API}/todos/${data}`);
    const result = yield response.json();
    /*  if (!result.length) {
             throw new Error('');
         } */
    yield put({ type: SET_MOVIES_DATA, data: result });
  } catch (e) {
    yield put({ type: SET_MOVIES_ERROR, data: true });
    yield put({ type: SET_MOVIES_LOADING, data: false });
  }

  yield put({ type: SET_MOVIES_LOADING, data: false });
}
