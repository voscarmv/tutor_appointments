import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignUp, dismissAlert } from '../actions/index';
import SignUp from '../components/SignUp';
import AlertMsg from '../components/AlertMsg';

const SignUpPage = () => {
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
    () => handleDismiss(),
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
  const handleSignUp = e => {
    e.preventDefault();
    dispatch(fetchSignUp({ email, password }, history));
  };
  return (
    <div>
      <AlertMsg
        content={content}
        type={type}
        show={show}
        handleDismiss={handleDismiss}
      />
      <h1>Sign up</h1>
      <SignUp
        handleSignUp={handleSignUp}
        handleUserChange={handleUserChange}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  );
};

export default SignUpPage;
