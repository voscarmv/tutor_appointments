/* eslint-disable no-console */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogIn, dismissAlert } from '../actions/index';
import LogIn from '../components/LogIn';
import AlertMsg from '../components/AlertMsg';

const LogInPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alertData = useSelector(state => state.logInState);
  const {
    content,
    type,
    show,
  } = alertData;
  const handleDismiss = () => {
    dispatch(dismissAlert());
  };
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
    dispatch(fetchLogIn(credentials, history));
  };
  return (
    <div>
      <AlertMsg
        content={content}
        type={type}
        show={show}
        handleDismiss={handleDismiss}
      />
      <LogIn
        handleLogIn={handleLogIn}
        handleUserChange={handleUserChange}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  );
};

export default LogInPage;
