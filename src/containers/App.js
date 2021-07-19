/* eslint-disable no-console */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavB from './Nav';
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';
import Home from './Home';
import SubjectsPage from './SubjectsPage';
import Appointment from './Appointment';
import AppointmentIndex from './AppointmenIndex';

const App = () => (
  <div className="container-fluid d-flex h-100 flex-column h-100">
    <Router>
      <div className="row flex-fill d-flex justify-content-start">
        <NavB />
        <div className="col-10 h-100">
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
        </div>
      </div>
    </Router>
  </div>
);

export default App;
