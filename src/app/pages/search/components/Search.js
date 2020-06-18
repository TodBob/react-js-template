import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Carousel from '../../../components/carousel/components/Carousel';
import Navbar from '../../../components/navbar/components/Navbar';
import SearchBar from '../../../components/searchbar/containers/Searchbar';
import Alert from '../../../components/alert/components/Alert';

const Search = ({ searchResults, searchError, intl }) => {
  const defaultError = intl.formatMessage({ id: 'default.error' });
  const searchResultsText = intl.formatMessage({ id: 'search.results' });

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="mt-5">
          <FormattedMessage id="search.title" />
        </h1>
        <SearchBar />
        {(searchResults && !searchResults.errors && !searchError) && (
        <>
          <Carousel
            title={searchResults.errors ? defaultError : searchResultsText}
            moviesArray={searchResults.results}
            arrayIndex="0"
          />
        </>
        )}
        {(searchError || (searchResults && searchResults.errors)) && (
        <Alert
          variant="danger"
          message={defaultError}
        />
        )}
      </div>
    </>
  );
};
Search.propTypes = {
  searchResults: PropTypes.object,
  searchError: PropTypes.bool,
  intl: PropTypes.object.isRequired,
};
export default injectIntl(Search);
