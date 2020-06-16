import { takeLatest } from 'redux-saga/effects';
import { FETCH_SEARCH_DATA } from '../constants';
import { fetchSearchData } from './fetchSearchData';

const searchData = [
  takeLatest(FETCH_SEARCH_DATA, fetchSearchData),
];

export default searchData;
