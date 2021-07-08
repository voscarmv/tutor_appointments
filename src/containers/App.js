/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';
import Home from './Home';
import SubjectsPage from './SubjectsPage';
import Appointment from './Appointment';
import AppointmentIndex from './AppointmenIndex';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LogInPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/subjects">
        <SubjectsPage />
      </Route>
      <Route path="/appointment">
        <Appointment />
      </Route>
      <Route path="/appointmentslist">
        <AppointmentIndex />
      </Route>
    </Switch>
  </Router>
);

export default App;
