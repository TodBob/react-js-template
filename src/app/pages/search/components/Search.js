import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../components/carousel/components/Carousel';
import Navbar from '../../../components/navbar/components/Navbar';
import SearchBar from '../../../components/searchbar/containers/Searchbar';
import Alert from '../../../components/alert/components/Alert';

const Search = ({ searchResults, searchError }) => (
  <>
    <Navbar />
    <div className="container">
      <h1 className="mt-5">Search</h1>
      <SearchBar />
      {searchResults && !searchResults.errors ? (
        <>
          <Carousel
            title={searchResults.errors ? 'Something is wrong, try it again. Please' : 'Search Results'}
            moviesArray={searchResults.results}
            moviesIndex="0"
          />
        </>
      ) : null}
      {searchError || (searchResults && searchResults.errors) ? (
        <Alert
          variant="danger"
          message="We are sorry, but somthing went wrong. Try it again later or contact support"
        />
      ) : null}
    </div>
  </>
);
Search.propTypes = {
  searchResults: PropTypes.object,
  searchError: PropTypes.bool,
};
export default Search;
