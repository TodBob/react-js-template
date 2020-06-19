import { takeLatest } from 'redux-saga/effects';
import { FETCH_MOVIES_DATA } from '../constants';
import { fetchMoviesData } from './fetchMoviesData';

const moviesSagas = [
  takeLatest(FETCH_MOVIES_DATA, fetchMoviesData),
];

export default moviesSagas;
