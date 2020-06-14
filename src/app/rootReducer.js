import { combineReducers } from 'redux';

/* CAROUSEL */
import movies from './pages/home/reducers/movies';
import moviesError from './pages/home/reducers/error';
import moviesLoading from './pages/home/reducers/loading';

const moviesData = combineReducers({
  movies,
  moviesError,
  moviesLoading,
});

const rootReducer = combineReducers({
  moviesData,
});

export default rootReducer;
