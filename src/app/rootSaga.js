import { all } from 'redux-saga/effects';
import moviesSagas from './pages/home/sagas';

export default function* rootSaga() {
  yield all([
    ...moviesSagas,
  ]);
}
