import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import SubjectDisplay from '../components/SubjectDisplay';
import AppointmentList from '../components/AppointmentList';
import fetchAppointment from '../actions/index';

const AppointmentIndex = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(state => state.appointmentsState);
  useEffect(
    () => {
      dispatch(fetchAppointment());
    },
    [],
  );
  return (
    <AppointmentList appointments={appointments} />
  );
};

export default AppointmentIndex;
