import React from 'react';
import propTypes from 'prop-types';

const LogIn = ({ handleUser, handlePassword, handleSubmit }) => (
  <form>
    <label htmlFor="username">
      <input onChange={handleUser} type="text" id="username" data-testid="user_test" />
    </label>
    <label htmlFor="password">
      <input onChange={handlePassword} type="password" id="password" data-testid="password_test" />
    </label>
    <input type="submit" onClick={handleSubmit} />
  </form>
);

LogIn.propTypes = {
  handleUser: propTypes.func.isRequired,
  handlePassword: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

export default LogIn;
