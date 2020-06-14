import { connect } from 'react-redux';
import { getMoviesData, getMovies } from '../selectors';
import Home from '../components/Home';
import { fetchMoviesData } from '../actions';

const mapStateToProps = (state) => ({
  moviesData: getMoviesData(state),
  movies: getMovies(state),
});

const mapDispatchToProps = {
  fetchMoviesData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
