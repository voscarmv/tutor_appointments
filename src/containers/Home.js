import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="m-3">
    <h5>
      Tutor Appointments
      <span aria-label="cat" role="img">🐈</span>
    </h5>
    <p>
      Choose a subject and a date.
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign Up</Link>
    </p>
  </div>
);

export default Home;
