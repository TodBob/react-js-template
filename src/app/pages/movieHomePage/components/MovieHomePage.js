import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Carousel from '../../../components/carousel/components/Carousel';
import Navbar from '../../../components/navbar/components/Navbar';
import Spinner from '../../../components/spinner/components/Spinner';
import Alert from '../../../components/alert/components/Alert';

const MovieHomePage = ({
  fetchMoviesData,
  movies,
  moviesError,
  moviesLoading,
  intl,
}) => {
  const carouselMovies = intl.formatMessage({ id: 'carousel.popularMovies' });
  const carouselSeries = intl.formatMessage({ id: 'carousel.popularSeries' });
  const carouselFamily = intl.formatMessage({ id: 'carousel.family' });
  const carouselDocumentary = intl.formatMessage({ id: 'carousel.documentary' });
  const defaultError = intl.formatMessage({ id: 'default.error' });

  useEffect(() => {
    fetchMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="mt-5"><FormattedMessage id="main.title" /></h1>
        {!!movies.length && (
          <>
            <Carousel title={carouselMovies} moviesArray={movies[0].results} arrayIndex="0" />
            <Carousel title={carouselSeries} moviesArray={movies[1].results} arrayIndex="1" />
            <Carousel title={carouselFamily} moviesArray={movies[2].results} arrayIndex="2" />
            <Carousel title={carouselDocumentary} moviesArray={movies[3].results} arrayIndex="3" />
          </>
        )}
        {moviesLoading && <Spinner />}
        {moviesError && (
          <Alert
            variant="danger"
            message={defaultError}
          />
        )}
      </div>
    </>
  );
};
MovieHomePage.propTypes = {
  fetchMoviesData: PropTypes.func.isRequired,
  movies: PropTypes.array,
  moviesError: PropTypes.bool.isRequired,
  moviesLoading: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
};
export default injectIntl(MovieHomePage);
