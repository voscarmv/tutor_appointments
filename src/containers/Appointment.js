import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubjectDisplay from '../components/SubjectDisplay';
import AppointmentForm from '../components/AppointmentForm';
import { postAppointment } from '../actions/index';

const Appointment = () => {
  const dispatch = useDispatch();
  const subject = useSelector(state => state.subjectDisplayState);
  const authKeyState = useSelector(state => state.authState);
  // const [appointmentDate, handleDateChange] = useState(new Date());
  // const [selectedCity, setCity] = useState('Paris');
  const [newAppointment, setNewAppointment] = useState(
    {
      city: 'Paris',
      date: new Date(),
      user_id: authKeyState.uid,
      subject_id: subject.id,
    },
  );
  const handleSelectChange = e => {
    e.preventDefault();
    setNewAppointment(
      {
        ...newAppointment,
        city: e.target.value,
      },
    );
  };
  const handleDateChange = e => {
    e.preventDefault();
    setNewAppointment(
      {
        ...newAppointment,
        date: e.target.value,
      },
    );
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postAppointment(newAppointment, authKeyState.key));
  };
  if (subject.name !== '') {
    const {
      name,
      tutor,
      description,
      tutorpic,
    } = subject;
    return (
      <>
        <SubjectDisplay
          name={name}
          tutor={tutor}
          description={description}
          tutorpic={tutorpic}
        />
        <AppointmentForm
          cities={['Paris', 'Tokyo', 'Moscow']}
          appointmentDate={newAppointment.date}
          selectedCity={newAppointment.city}
          handleSelectChange={handleSelectChange}
          handleDateChange={handleDateChange}
          handleSubmit={handleSubmit}
        />
      </>
    );
  }
  return null;
};

export default Appointment;
