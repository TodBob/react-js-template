import { combineReducers } from 'redux';

/* CAROUSEL */
import home from './pages/home/reducers/home';
import moviesError from './pages/home/reducers/error';
import moviesLoading from './pages/home/reducers/loading';

const moviesData = combineReducers({
  home,
  moviesError,
  moviesLoading,
});

const rootReducer = combineReducers({
  moviesData,
});

export default rootReducer;
