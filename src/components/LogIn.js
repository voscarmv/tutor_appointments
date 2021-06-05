import React from 'react';
import propTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const LogIn = ({ handleLogIn, handleUserChange, handlePasswordChange }) => (
  <Form onSubmit={handleLogIn}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={handleUserChange} />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Log in
    </Button>
  </Form>
);

LogIn.propTypes = {
  handleUserChange: propTypes.func.isRequired,
  handlePasswordChange: propTypes.func.isRequired,
  handleLogIn: propTypes.func.isRequired,
};

export default LogIn;
