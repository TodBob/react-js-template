import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../components/carousel/components/Carousel';

const Home = ({ fetchMoviesData }) => {
  useEffect(() => {
    fetchMoviesData('1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: LOADING SPINNER

  return (
    <>
      {/* TODO: NAV BAR */}
      <div className="container">
        <h1 className="mt-5">Film database</h1>
        <Carousel title="Popular Movies" dataArray={[1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 46, 54, 4, 1, 1, 1, 1, 1, 1, 1, 1]} />
        <Carousel title="Popular Series" dataArray={[1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 46, 54, 4, 1, 1, 1, 1, 1, 1, 1, 1]} />
        <Carousel title="Family" dataArray={[1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 46, 54, 4, 1, 1, 1, 1, 1, 1, 1, 1]} />
        <Carousel title="Documentary" dataArray={[1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 46, 54, 4, 1, 1, 1, 1, 1, 1, 1, 1]} />
      </div>
    </>
  );
};
Home.propTypes = {
  fetchMoviesData: PropTypes.func.isRequired,
};
export default Home;
