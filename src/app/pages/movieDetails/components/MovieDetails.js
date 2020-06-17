import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  useParams,
  Redirect,
} from 'react-router-dom';
import DefaultLogo from '../../../assets/default.svg';
import Navbar from '../../../components/navbar/components/Navbar';
import Modal from '../../../components/modal/components/Modal';
import Video from '../../../components/videoplayer/components/VideoPlayer';

const MovieDetails = ({ movies, searchResults }) => {
  /*
    - get url param from router
    - split them to:
      1. movie id,
      2. index of data array,
      3. if we came from search page
  */
  const { id } = useParams();
  const splitId = id.split('-');
  const movieId = splitId[0];
  const arrayIndex = splitId[1];
  const isSearchPage = splitId[2];

  let movieObj;
  let imgUrl;

  /*
  Check if we came from Homepage or Search page
  Then we can choose which data to filter
  */
  if (isSearchPage === 'false' && movies) {
    movieObj = movies[arrayIndex].results.find((movie) => movie.id.toString() === movieId);
    imgUrl = movieObj.poster_path ? `http://image.tmdb.org/t/p/w342${movieObj.poster_path}` : DefaultLogo;
  } else if (searchResults) {
    movieObj = searchResults.results.find((movie) => movie.id.toString() === splitId[0]);
    imgUrl = movieObj.poster_path ? `http://image.tmdb.org/t/p/w342${movieObj.poster_path}` : DefaultLogo;
  }

  return (
    <>
      {!movies ? <Redirect push to="/" />
        : (
          <>
            <Navbar />
            <div className="container detail-container">
              <Container>
                <Row>
                  <Col md={12} lg={6} className="d-flex flex-column">
                    <div className="left-column">
                      <h2 className="mt-5">
                        {movieObj.original_title
                          ? movieObj.original_title
                          : movieObj.original_name}
                      </h2>
                      <p className="mt-3">
                        {movieObj.overview}
                      </p>
                      <hr className="my-4" />
                      <ul>
                        <li>
                          Release date:
                          {' '}
                          {movieObj.release_date}
                        </li>
                        <li>
                          Original language:
                          {' '}
                          {movieObj.original_language.toUpperCase()}
                        </li>
                        <li>
                          Rating:
                          {' '}
                          {movieObj.vote_average}
                        </li>
                      </ul>
                    </div>
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

MovieDetails.propTypes = {
  movies: PropTypes.array,
  searchResults: PropTypes.object,
};
export default MovieDetails;
