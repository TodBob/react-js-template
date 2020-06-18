import { put } from 'redux-saga/effects';
import { MOVIES_URLS } from '../helpers/urls';
import { getGenreIds } from '../helpers/getGenreIds';
import {
  SET_MOVIES_LOADING,
  SET_MOVIES_ERROR,
  SET_MOVIES_DATA,
} from '../constants';

/* Fetch logic depends at order in MOVIES_URLS
  1. popular movies
  2. popular series
  3. family genre
  4. documentary genre

  Right now I fetch only one page
    - If its needed, I could add ,,lazy loading,, feature

  DEFINITELY THERE COULD BE BETTER LOGIC, BUT FOR THIS CASE WORKS WELL
*/

export function* fetchMoviesData() {
  yield put({ type: SET_MOVIES_LOADING, data: true });
  yield put({ type: SET_MOVIES_ERROR, data: false });
  try {
    console.log('test');
    const genreIds = yield getGenreIds();
    console.log('..............saga', getGenreIds());
    const response = yield Promise.all(
      MOVIES_URLS(genreIds.genre_family, genreIds.genre_documentary)
        .map((url) => fetch(url)),
    );
    const result = yield Promise.all(response.map((responses) => responses.json()));
    yield put({ type: SET_MOVIES_DATA, data: result });
  } catch (e) {
    yield put({ type: SET_MOVIES_ERROR, data: true });
    yield put({ type: SET_MOVIES_LOADING, data: false });
  }

  yield put({ type: SET_MOVIES_LOADING, data: false });
}
