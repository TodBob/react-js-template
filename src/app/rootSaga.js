import { all } from 'redux-saga/effects';
import carouselSagas from './components/carousel/sagas';

export default function* rootSaga() {
  yield all([
    ...carouselSagas,
  ]);
}
