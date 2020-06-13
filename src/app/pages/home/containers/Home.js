import { connect } from 'react-redux';
import { getMoviesData } from '../selectors';
import Home from '../components/Home';
import { fetchMoviesData } from '../actions';

const mapStateToProps = (state) => ({
  moviesData: getMoviesData(state),
});

const mapDispatchToProps = {
  fetchMoviesData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
