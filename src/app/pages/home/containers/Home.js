import { connect } from 'react-redux';
import {
  getMoviesData, getMovies, getMoviesError, getMoviesLoading,
} from '../selectors';
import Home from '../components/Home';
import { fetchMoviesData } from '../actions';

const mapStateToProps = (state) => ({
  moviesData: getMoviesData(state),
  movies: getMovies(state),
  moviesError: getMoviesError(state),
  moviesLoading: getMoviesLoading(state),
});

const mapDispatchToProps = {
  fetchMoviesData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
