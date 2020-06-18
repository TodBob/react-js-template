import { combineReducers } from 'redux';

/* MOVIES */
import movies from './pages/home/reducers/movies';
import moviesError from './pages/home/reducers/error';
import moviesLoading from './pages/home/reducers/loading';

/* SEARCH BAR */
import searchResults from './components/searchbar/reducers/search';
import searchLoading from './components/searchbar/reducers/loading';
import searchError from './components/searchbar/reducers/error';

const moviesData = combineReducers({
  movies,
  moviesError,
  moviesLoading,
});

const searchData = combineReducers({
  searchResults,
  searchLoading,
  searchError,
});

const rootReducer = combineReducers({
  moviesData,
  searchData,
});

export default rootReducer;
