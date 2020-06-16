import { connect } from 'react-redux';
import { getMoviesData, getMovies } from '../../home/selectors';
import { getSearchResults } from '../../../components/searchbar/selectors';
import MovieDetails from '../components/MovieDetails';

const mapStateToProps = (state) => ({
  moviesData: getMoviesData(state),
  movies: getMovies(state),
  searchResults: getSearchResults(state),
});

export default connect(
  mapStateToProps,
  null,
)(MovieDetails);
