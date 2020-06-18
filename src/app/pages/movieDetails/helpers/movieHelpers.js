import DefaultLogo from '../../../assets/default.svg';
import { BASE_IMG_URL } from './urls';

export const getMovie = (movies, movieId) => movies.find(
  (movie) => movie.id.toString() === movieId.toString(),
);

export const getImgUrl = (movie) => ((movie && movie.poster_path) ? `${BASE_IMG_URL}${movie.poster_path}` : DefaultLogo);

export const getMoviesData = (movies, arrayIndex) => (movies.length
  ? movies[arrayIndex].results
  : []);
export const getSearchResultsData = (searchResults) => (searchResults ? searchResults.results : []);
