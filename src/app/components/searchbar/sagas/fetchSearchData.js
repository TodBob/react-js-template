import { put } from 'redux-saga/effects';
import { BASE_API_KEY, BASE_API_V3_URL } from '../../../../http/api';
import {
  SET_SEARCH_DATA,
  SET_SEARCH_ERROR,
  SET_SEARCH_LOADING,
} from '../constants';

export function* fetchSearchData({ data }) {
  const { searchValue, type } = data;
  yield put({ type: SET_SEARCH_LOADING, data: true });
  yield put({ type: SET_SEARCH_ERROR, data: false });

  try {
    const response = yield fetch(`${BASE_API_V3_URL}/search/${type}${BASE_API_KEY}&query=${searchValue}`);
    const result = yield response.json();
    yield put({ type: SET_SEARCH_DATA, data: result });
  } catch (e) {
    yield put({ type: SET_SEARCH_ERROR, data: true });
    yield put({ type: SET_SEARCH_LOADING, data: false });
  }

  yield put({ type: SET_SEARCH_LOADING, data: false });
}
