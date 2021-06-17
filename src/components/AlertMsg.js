import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import {
  Alert,
  Button,
} from 'react-bootstrap';
// import { alertMessage } from '../actions';

const AlertMsg = props => {
  const {
    content, type, show, handleDismiss,
  } = props;
  if (show) {
    return (
      <Alert variant={type} onDismiss={handleDismiss}>
        <p>
          {content}
        </p>
        <p>
          <Button onClick={handleDismiss}>Ok</Button>
        </p>
      </Alert>
    );
  }
  return (
    null
  );
};

AlertMsg.propTypes = {
  content: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  show: propTypes.bool.isRequired,
  handleDismiss: propTypes.func.isRequired,
};

export default AlertMsg;
