import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import {
  Card, Button,
} from 'react-bootstrap';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import { responsive } from '../helpers/carouselResponsive';
import DefaultLogo from '../../../assets/default.svg';

const CarouselComponent = ({
  moviesArray, title, moviesIndex,
}) => {
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('search');

  return (
    <div className="my-5">
      <h3 className="mb-3">{title}</h3>
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
          <Card key={`${movie.id}${movie.release_date}`} className="card" style={{ width: '250px' }}>
            <Card.Img
              variant="top"
              src={movie.poster_path
                ? `http://image.tmdb.org/t/p/w342${movie.poster_path}`
                : DefaultLogo}
            />
            <Card.Body>
              <Card.Title>
                {movie.original_title
                  ? movie.original_title
                  : movie.original_name}
              </Card.Title>
              <Link className="card-button" to={`/details/${movie.id}-${moviesIndex}-${isSearchPage}`}>
                <Button variant="primary">Details!</Button>
              </Link>
            </Card.Body>
          </Card>
        )) : []}

      </Carousel>
    </div>
  );
};

CarouselComponent.propTypes = {
  moviesArray: PropTypes.array,
  title: PropTypes.string.isRequired,
  moviesIndex: PropTypes.string.isRequired,
};

export default CarouselComponent;
