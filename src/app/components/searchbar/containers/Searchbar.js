import { connect } from 'react-redux';
import SearchBar from '../components/Searchbar';
import { getSearchLoading } from '../selectors';
import { fetchSearchData } from '../actions';

const mapStateToProps = (state) => ({
  loading: getSearchLoading(state),
});

const mapDispatchToProps = {
  fetchSearchData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
