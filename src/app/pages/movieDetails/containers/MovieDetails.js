import { connect } from 'react-redux';
import { getMovies } from '../../home/selectors';
import { getSearchResults } from '../../../components/searchbar/selectors';
import MovieDetails from '../components/MovieDetails';

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  searchResults: getSearchResults(state),
});

export default connect(
  mapStateToProps,
  null,
)(MovieDetails);
