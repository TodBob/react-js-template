import { all } from 'redux-saga/effects';
import moviesSagas from './pages/home/sagas';
import searchbarSagas from './components/searchbar/sagas';

export default function* rootSaga() {
  yield all([
    ...moviesSagas,
    ...searchbarSagas,
  ]);
}
