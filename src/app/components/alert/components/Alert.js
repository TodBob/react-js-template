import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
} from 'react-bootstrap';

const AlertComponent = ({ variant, message }) => (
  <Alert variant={variant}>
    {message}
  </Alert>
);

AlertComponent.propTypes = {
  variant: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default AlertComponent;
