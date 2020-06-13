import React from 'react';
// import PropTypes from 'prop-types';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import Navbar from '../../../components/navbar/components/Navbar';

const MovieDetails = () => (
/*   useEffect(() => {
    // fetchMovieInfoData('1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  // TODO: LOADING SPINNER

  <>
    <Navbar />
    <div className="container detail-container">
      <Container>
        <Row>
          <Col md={12} lg={6} className="d-flex flex-column">
            <div classNam="left-column">
              <h2 className="mt-5">NAME OF MOVIE: placeholder</h2>
              <p className="mt-3">
                SOME DESCRIPTIONS: placeholder
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <hr className="my-4" />
              <ul>
                <li>meta data</li>
                <li>meta data</li>
                <li>meta data</li>
              </ul>
            </div>
            <Button className="mt-auto">Play button</Button>
          </Col>
          <Col md={12} lg={6} className="right-column">
            <div style={{ width: '500px', height: '500px', background: 'green' }} className="mt-5">
              MOVIE TRAILER
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);
/* MovieDetails.propTypes = {
  fetchMoviesData: PropTypes.func.isRequired,
}; */
export default MovieDetails;
