import { connect } from 'react-redux';
import { getMoviesData, getMovies } from '../../home/selectors';
import MovieDetails from '../components/MovieDetails';

const mapStateToProps = (state) => ({
  moviesData: getMoviesData(state),
  movies: getMovies(state),
});

export default connect(
  mapStateToProps,
  null,
)(MovieDetails);
