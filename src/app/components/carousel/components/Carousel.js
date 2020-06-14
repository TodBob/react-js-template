import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import {
  Card, Button,
} from 'react-bootstrap';
import { responsive } from '../helpers/carouselResponsive';
import DefaultLogo from '../../../assets/default.svg';

const CarouselComponent = ({ moviesArray, title }) => (
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
      {moviesArray.map((movie) => (
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
            <Button variant="primary">Details!</Button>
          </Card.Body>
        </Card>
      ))}

    </Carousel>
  </div>
);

CarouselComponent.propTypes = {
  moviesArray: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default CarouselComponent;
