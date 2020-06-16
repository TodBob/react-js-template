import { connect } from 'react-redux';
import SearchPage from '../components/Search';
import { getSearchResults } from '../../../components/searchbar/selectors';

const mapStateToProps = (state) => ({
  searchResults: getSearchResults(state),
});

export default connect(
  mapStateToProps,
  null,
)(SearchPage);
