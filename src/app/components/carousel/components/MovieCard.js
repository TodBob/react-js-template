import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Card, Button,
} from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';
import { BASE_IMG } from '../../../../http/api';
import DefaultLogo from '../../../assets/default.svg';

const MovieCard = ({ movie, arrayIndex, isSearchPage }) => (
  <Card className="card">
    <Card.Img
      variant="top"
      src={movie.poster_path
        ? `${BASE_IMG}${movie.poster_path}`
        : DefaultLogo}
    />
    <Card.Body>
      <Card.Title>
        {movie.original_title
          ? movie.original_title
          : movie.original_name}
      </Card.Title>
      <Link className="card-button" to={`/details/${movie.id}/${arrayIndex}/${isSearchPage}`}>
        <Button variant="primary">
          <FormattedMessage id="carousel.card.detailButton" />
        </Button>
      </Link>
    </Card.Body>
  </Card>
);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  arrayIndex: PropTypes.string.isRequired,
  isSearchPage: PropTypes.bool.isRequired,
};

export default MovieCard;
