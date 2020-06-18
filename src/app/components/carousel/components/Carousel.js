import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import {
  useLocation,
} from 'react-router-dom';
import { responsive } from '../helpers/carouselResponsive';
import Alert from '../../alert/components/Alert';
import MovieCard from './MovieCard';

const CarouselComponent = ({
  moviesArray, title, arrayIndex, intl,
}) => {
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('search');
  const customErrorP1 = intl.formatMessage({ id: 'custom.errorP1' });
  const customErrorP2 = intl.formatMessage({ id: 'custom.errorP2' });

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
            message={`${customErrorP1} "${title}", ${customErrorP2}`}
          />
        )}
    </div>
  );
};

CarouselComponent.propTypes = {
  moviesArray: PropTypes.array,
  title: PropTypes.string.isRequired,
  arrayIndex: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(CarouselComponent);
