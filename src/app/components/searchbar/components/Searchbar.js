import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import {
  Button, Form, Navbar, FormControl, Spinner,
} from 'react-bootstrap';

const SearchBar = ({ fetchSearchData, loading, intl }) => {
  const [searchValue, setSearchValue] = useState('');
  const [type, setType] = useState('movie');
  const data = { searchValue, type };

  const selectSeries = intl.formatMessage({ id: 'search.select.Series' });
  const selectMovies = intl.formatMessage({ id: 'search.select.movies' });
  const searchPlaceholder = intl.formatMessage({ id: 'search.placeHolder' });
  const searchSubmit = intl.formatMessage({ id: 'search.submit' });

  const handleChange = (e) => {
    if (e.target.type === 'text') {
      setSearchValue(e.target.value);
    } else {
      setType(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchData(data);
  };

  return (
    <div className="my-5">
      <Navbar className="bg-light justify-content-between custom-navbar">
        <Form inline className="navbar-form">
          <div className="top-container">
            <FormControl
              type="text"
              value={searchValue}
              onChange={handleChange}
              placeholder={searchPlaceholder}
              className="search-input mr-sm-2"
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className="submit-button"
            >
              {loading ? (
                <Spinner className="spinner" animation="border" role="status">
                  <span className="sr-only">
                    <FormattedMessage id="default.loading" />
                  </span>
                </Spinner>
              ) : searchSubmit}
            </Button>
          </div>
          <div className="bottom-container">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label className="label">
                <FormattedMessage id="search.select" />
              </Form.Label>
              <Form.Control value={type} onChange={handleChange} as="select" custom>
                <option value="movie">{selectMovies}</option>
                <option value="tv">{selectSeries}</option>
              </Form.Control>
            </Form.Group>
          </div>
        </Form>
      </Navbar>
    </div>
  );
};
SearchBar.propTypes = {
  fetchSearchData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(SearchBar);
