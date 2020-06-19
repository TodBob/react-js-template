import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Spinner,
} from 'react-bootstrap';

const SpinnerComponent = () => (
  <div className="spinner-container">
    <Spinner animation="border" role="status">
      <span className="sr-only"><FormattedMessage id="default.loading" /></span>
    </Spinner>
  </div>
);

export default SpinnerComponent;
