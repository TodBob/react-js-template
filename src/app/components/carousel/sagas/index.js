
import { takeLatest } from 'redux-saga/effects';
import { FETCH_TEST_STATE } from '../constants';
import { fetchCarouselData } from './fetchCarouselData';

const moviesSagas = [
    takeLatest(FETCH_TEST_STATE, fetchCarouselData),
];

export default moviesSagas;