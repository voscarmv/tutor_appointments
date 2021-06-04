import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  Alert,
  Button,
} from 'react-bootstrap';

const AlertMsg = ({ content, type, show }) => {
  const [showIt, setShowIt] = useState(
    {
      show,
    },
  );
  const handleDismiss = () => {
    setShowIt({ show: false });
  };
  if (showIt.show) {
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
};

export default AlertMsg;
