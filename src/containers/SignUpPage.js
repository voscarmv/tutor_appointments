/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSignUp } from '../actions/index';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
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
  const handleSignUp = e => {
    e.preventDefault();
    dispatch(fetchSignUp(credentials));
  };
  return (
    <SignUp
      handleSignUp={handleSignUp}
      handleUserChange={handleUserChange}
      handlePasswordChange={handlePasswordChange}
    />
  );
};

export default SignUpPage;
