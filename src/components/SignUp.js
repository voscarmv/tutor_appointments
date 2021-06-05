import React from 'react';
import propTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const LogIn = ({ handleSignUp, handleUserChange, handlePasswordChange }) => (
  <Form onSubmit={handleSignUp}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={handleUserChange} />
      <Form.Text className="text-muted">
        We will never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Sign up
    </Button>
  </Form>
);

LogIn.propTypes = {
  handleUserChange: propTypes.func.isRequired,
  handlePasswordChange: propTypes.func.isRequired,
  handleSignUp: propTypes.func.isRequired,
};

export default LogIn;
