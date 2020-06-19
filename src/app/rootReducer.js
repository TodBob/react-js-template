import { combineReducers } from 'redux';

/* MOVIES HOME PAGE */
import movies from './pages/movieHomePage/reducers/movies';
import moviesError from './pages/movieHomePage/reducers/error';
import moviesLoading from './pages/movieHomePage/reducers/loading';

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
