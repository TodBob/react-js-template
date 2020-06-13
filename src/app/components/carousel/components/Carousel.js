import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import {
  Card, Button,
} from 'react-bootstrap';
import { responsive } from '../helpers/carouselResponsive';

const CarouselComponent = ({ dataArray, title }) => (
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
      {dataArray.map(() => (
        <Card className="card" style={{ width: '250px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}

    </Carousel>
  </div>
);

CarouselComponent.propTypes = {
  dataArray: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default CarouselComponent;
