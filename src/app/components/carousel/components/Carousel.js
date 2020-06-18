import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import {
  useLocation,
} from 'react-router-dom';
import { responsive } from '../helpers/carouselResponsive';
import Alert from '../../alert/components/Alert';
import MovieCard from './MovieCard';

const CarouselComponent = ({
  moviesArray, title, arrayIndex,
}) => {
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('search');

  return (
    <div className="my-5">
      <h3 className="mb-3">{title}</h3>
      {moviesArray
        ? (
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="carousel"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass="carouselItem"
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {moviesArray ? moviesArray.map((movie) => (
              <MovieCard
                key={`${movie.id}${movie.release_date}`}
                movie={movie}
                arrayIndex={arrayIndex}
                isSearchPage={isSearchPage}
              />
            )) : []}
          </Carousel>
        )
        : (
          <Alert
            variant="danger"
            message={`We werent able to get "${title}", try to reload page`}
          />
        )}
    </div>
  );
};

CarouselComponent.propTypes = {
  moviesArray: PropTypes.array,
  title: PropTypes.string.isRequired,
  arrayIndex: PropTypes.string.isRequired,
};

export default CarouselComponent;
