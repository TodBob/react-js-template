import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const MovieBody = ({ movieObj }) => (
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
        <FormattedMessage id="details.release" />
        :
        {' '}
        {movieObj.release_date}
      </li>
      <li>
        <FormattedMessage id="details.language" />
        :
        {' '}
        {movieObj.original_language.toUpperCase()}
      </li>
      <li>
        <FormattedMessage id="details.rating" />
        :
        {' '}
        {movieObj.vote_average}
      </li>
    </ul>
  </div>
);

MovieBody.propTypes = {
  movieObj: PropTypes.object.isRequired,
};
export default MovieBody;
