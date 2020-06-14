import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../components/carousel/components/Carousel';
import Navbar from '../../../components/navbar/components/Navbar';
import Spinner from '../../../components/spinner/components/Spinner';

const Home = ({ fetchMoviesData, movies }) => {
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
            <Carousel title="Popular Movies" moviesArray={movies[0].results} />
            <Carousel title="Popular Series" moviesArray={movies[1].results} />
            <Carousel title="Family" moviesArray={movies[2].results} />
            <Carousel title="Documentary" moviesArray={movies[3].results} />
          </>
        ) : <Spinner />}
      </div>
    </>
  );
};
Home.propTypes = {
  fetchMoviesData: PropTypes.func.isRequired,
  movies: PropTypes.array,
};
export default Home;
