import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Navbar, FormControl, Spinner,
} from 'react-bootstrap';

const SearchBar = ({ fetchSearchData, loading }) => {
  const [searchValue, setSearchValue] = useState('');
  const [type, setType] = useState('movie');
  const data = { searchValue, type };

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
              placeholder="Search"
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
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : 'Submit'}
            </Button>
          </div>
          <div className="bottom-container">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label className="label">
                Select type:
              </Form.Label>
              <Form.Control value={type} onChange={handleChange} as="select" custom>
                <option value="movie">Movies</option>
                <option value="tv">Series</option>
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

};

export default SearchBar;
