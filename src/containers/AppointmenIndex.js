import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import SubjectDisplay from '../components/SubjectDisplay';
import AppointmentList from '../components/AppointmentList';
import { fetchAppointment, dismissAppointment } from '../actions/index';

const AppointmentIndex = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(state => state.appointmentsState);
  const authKeyState = useSelector(state => state.authState);
  // eslint-disable-next-line no-console
  console.log(appointments);
  useEffect(
    () => {
      dispatch(fetchAppointment(authKeyState.key));
      return () => {
        // eslint-disable-next-line no-console
        console.log('Exiting appointments page');
        dispatch(dismissAppointment());
      };
    },
    [],
  );
  // eslint-disable-next-line no-console
  console.log(appointments.data);
  return (
    <AppointmentList appointments={appointments.data} />
  );
};

export default AppointmentIndex;
