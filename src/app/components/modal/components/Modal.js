import React, { useState, useCallback, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Button, Modal,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function ModalComponent({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function handle close on ESC button press
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      handleClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Button className="detail-page-button" variant="primary" onClick={handleShow}>
        <FormattedMessage id="details.playButton" />
      </Button>
      <Modal
        className="custom-modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="close-button" onClick={handleClose}>X</div>
        {children}
      </Modal>
    </>
  );
}

ModalComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ModalComponent;
