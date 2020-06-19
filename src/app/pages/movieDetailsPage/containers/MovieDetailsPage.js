import { connect } from 'react-redux';
import { getMovies } from '../../movieHomePage/selectors';
import { getSearchResults } from '../../../components/searchbar/selectors';
import MovieDetailsPage from '../components/MovieDetailsPage';

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  searchResults: getSearchResults(state),
});

export default connect(
  mapStateToProps,
  null,
)(MovieDetailsPage);
