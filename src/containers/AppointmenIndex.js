import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppointmentList from '../components/AppointmentList';
import { fetchAppointment, dismissAppointment } from '../actions/index';

const AppointmentIndex = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(state => state.appointmentsState);
  const authKeyState = useSelector(state => state.authState);
  useEffect(
    () => {
      dispatch(fetchAppointment(authKeyState.key));
      return () => {
        dispatch(dismissAppointment());
      };
    },
    [],
  );
  return (
    <div>
      <h1>Booked appointments</h1>
      <p><Link to="/subjects">Click here to book a new appointmnet</Link></p>
      <p>This is a list of your booked appointments:</p>
      <AppointmentList appointments={appointments.data} />
    </div>
  );
};

export default AppointmentIndex;
