/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogIn } from '../actions/index';
import LogIn from '../components/LogIn';

const LogInPage = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState(
    {
      email: '',
      password: '',
    },
  );
  const handleUserChange = e => {
    setCredentials(
      {
        ...credentials,
        email: e.target.value,
      },
    );
  };
  const handlePasswordChange = e => {
    setCredentials(
      {
        ...credentials,
        password: e.target.value,
      },
    );
  };
  const handleLogIn = e => {
    e.preventDefault();
    dispatch(fetchLogIn(credentials));
  };
  return (
    <LogIn
      handleLogIn={handleLogIn}
      handleUserChange={handleUserChange}
      handlePasswordChange={handlePasswordChange}
    />
  );
};

export default LogInPage;
