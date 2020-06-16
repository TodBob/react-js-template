import React, { useState, useCallback, useEffect } from 'react';
import {
  Button, Modal,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function ModalComponent({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        Watch Movie
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
