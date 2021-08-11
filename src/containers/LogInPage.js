import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogIn, dismissAlert } from '../actions/index';
import LogIn from '../components/LogIn';
import AlertMsg from '../components/AlertMsg';

const LogInPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alertData = useSelector(state => state.fetchState);
  const {
    content,
    type,
    show,
  } = alertData;
  const handleDismiss = () => {
    dispatch(dismissAlert());
  };
  useEffect(
    () => handleDismiss,
    [],
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleUserChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleLogIn = e => {
    e.preventDefault();
    dispatch(fetchLogIn({ email, password }, history));
  };
  return (
    <div>
      <AlertMsg
        content={content}
        type={type}
        show={show}
        handleDismiss={handleDismiss}
      />
      <h1>Log in</h1>
      <LogIn
        handleLogIn={handleLogIn}
        handleUserChange={handleUserChange}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  );
};

export default LogInPage;
