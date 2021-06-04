import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import propTypes from 'prop-types';
import {
  Alert,
  Button,
} from 'react-bootstrap';
import { alertMessage } from '../actions';

const AlertMsg = () => {
  const alertData = useSelector(state => state.alertState);
  const dispatch = useDispatch();
  const handleDismiss = () => {
    dispatch(
      alertMessage(
        {
          ...alertData,
          show: false,
        },
      ),
    );
  };
  if (alertData.show) {
    return (
      <Alert variant={alertData.type} onDismiss={handleDismiss}>
        <p>
          {alertData.content}
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

// AlertMsg.propTypes = {
//   content: propTypes.string.isRequired,
//   type: propTypes.string.isRequired,
//   show: propTypes.bool.isRequired,
// };

export default AlertMsg;
