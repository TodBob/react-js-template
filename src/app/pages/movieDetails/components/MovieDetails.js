import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import {
  useParams,
  Redirect,
} from 'react-router-dom';
import DefaultLogo from '../../../assets/default.svg';
import Navbar from '../../../components/navbar/components/Navbar';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const splitId = id.split('-');
  let movieObj;
  let imgUrl;
  if (movies) {
    movieObj = movies[splitId[1]].results.find((movie) => movie.id.toString() === splitId[0]);
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
                    <Button className="mt-auto detail-page-button">Play button</Button>
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
  movies: PropTypes.array.isRequired,
};
export default MovieDetails;
