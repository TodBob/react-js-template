import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../components/carousel/components/Carousel';
import Navbar from '../../../components/navbar/components/Navbar';
import Spinner from '../../../components/spinner/components/Spinner';
import Alert from '../../../components/alert/components/Alert';

const Home = ({
  fetchMoviesData, movies, moviesError, moviesLoading,
}) => {
  useEffect(() => {
    fetchMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="mt-5">Movies Database</h1>
        {movies ? (
          <>
            <Carousel title="Popular Movies" moviesArray={movies[0].results} moviesIndex="0" />
            <Carousel title="Popular Series" moviesArray={movies[1].results} moviesIndex="1" />
            <Carousel title="Family" moviesArray={movies[2].results} moviesIndex="2" />
            <Carousel title="Documentary" moviesArray={movies[3].results} moviesIndex="3" />
          </>
        ) : (
          null
        )}
        {moviesLoading ? <Spinner /> : null}
        {moviesError ? (
          <Alert
            variant="danger"
            message="Something went wrong, try to reload page or contact support"
          />
        ) : null}
      </div>
    </>
  );
};
Home.propTypes = {
  fetchMoviesData: PropTypes.func.isRequired,
  movies: PropTypes.array,
  moviesError: PropTypes.bool.isRequired,
  moviesLoading: PropTypes.bool.isRequired,
};
export default Home;
