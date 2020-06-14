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
  3. & 4. Family genre (movies/series)
  3. & 4. Documentary genre (movies/series)

  Right now I fetch only one page from movies and series
    - If this goes to production, I will add ,,lazy loading,, feature

  DEFINITELY THERE COULD BE BETTER LOGIC, BUT FOR THIS CASE WORKS WELL
*/

export function* fetchMoviesData() {
  yield put({ type: SET_MOVIES_LOADING, data: true });
  yield put({ type: SET_MOVIES_ERROR, data: false });
  try {
    const genreIds = yield getGenreIds();
    const response = yield Promise.all(
      MOVIES_URLS(genreIds.movie_family, genreIds.movie_documentary)
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
