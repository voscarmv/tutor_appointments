import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignUp, dismissAlert } from '../actions/index';
import SignUp from '../components/SignUp';
import AlertMsg from '../components/AlertMsg';

const SignUpPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alertData = useSelector(state => state.signUpState);
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
  const handleSignUp = e => {
    e.preventDefault();
    dispatch(fetchSignUp(credentials, history));
  };
  return (
    <div>
      <AlertMsg
        content={content}
        type={type}
        show={show}
        handleDismiss={handleDismiss}
      />
      <SignUp
        handleSignUp={handleSignUp}
        handleUserChange={handleUserChange}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  );
};

export default SignUpPage;
