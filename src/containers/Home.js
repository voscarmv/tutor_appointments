import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="m-3">
    <h5>
      Tutor Appointments
      <span aria-label="cat" role="img">🐈</span>
    </h5>
    <ul>
      Choose a subject and a date.
      <li><Link to="/login">Log in</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
      <li><Link to="/subjects">Subjects</Link></li>
    </ul>
  </div>
);

export default Home;
