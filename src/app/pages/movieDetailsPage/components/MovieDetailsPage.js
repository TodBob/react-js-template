import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  useParams,
  Redirect,
} from 'react-router-dom';
import {
  getImgUrl, getMovie, getMoviesData, getSearchResultsData,
} from '../helpers/movieHelpers';
import Navbar from '../../../components/navbar/components/Navbar';
import Modal from '../../../components/modal/components/Modal';
import Video from '../../../components/videoplayer/components/VideoPlayer';
import MovieBody from './MovieBody';

const MovieDetailsPage = ({ movies, searchResults }) => {
  const { movieId, arrayIndex, isSearchPage } = useParams();

  const areSearchResults = isSearchPage === 'true';

  const moviesData = areSearchResults
    ? getSearchResultsData(searchResults)
    : getMoviesData(movies, arrayIndex);

  const movieObj = getMovie(moviesData, movieId);
  const imgUrl = getImgUrl(movieObj);

  return (
    <>
      {!moviesData.length ? <Redirect push to="/" />
        : (
          <>
            <Navbar />
            <div className="container detail-container">
              <Container>
                <Row>
                  <Col md={12} lg={6} className="d-flex flex-column">
                    <MovieBody movieObj={movieObj} />
                    <Modal>
                      <Video />
                    </Modal>
                  </Col>
                  <Col md={12} lg={6} className="right-column">
                    <img className="mt-5 detail-page-img" src={imgUrl} alt={movieObj.original_title} />
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        ) }
    </>
  );
};

MovieDetailsPage.propTypes = {
  movies: PropTypes.array,
  searchResults: PropTypes.object,
};
export default MovieDetailsPage;
