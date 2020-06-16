import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../components/carousel/components/Carousel';
import Navbar from '../../../components/navbar/components/Navbar';
import SearchBar from '../../../components/searchbar/containers/Searchbar';

const Search = ({ searchResults }) => (
  <>
    <Navbar />
    <div className="container">
      <h1 className="mt-5">Search</h1>
      <SearchBar />
      {searchResults ? (
        <>
          <Carousel
            title={searchResults.errors ? 'Something is wrong, try it again. Please' : 'Search Results'}
            moviesArray={searchResults.results}
            moviesIndex="0"
          />
        </>
      ) : null}
    </div>
  </>
);
Search.propTypes = {
  searchResults: PropTypes.object,
};
export default Search;
