import React from 'react';
import LogIn from '../components/LogIn';

const LogInPage = () => (
  <div className="m-3">
    <h5>
      Log in
      <span aria-label="cat" role="img">🐈</span>
    </h5>
    <p>
      <LogIn />
    </p>
  </div>
);

export default LogInPage;
