import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SubjectDisplay from '../components/SubjectDisplay';
import AppointmentForm from '../components/AppointmentForm';

const Appointment = () => {
  const subject = useSelector(state => state.subjectDisplayState);
  const [appointmentDate, handleDateChange] = useState(new Date());
  const [selectedCity, setCity] = useState('Paris');
  const handleSelectChange = e => {
    e.preventDefault();
    setCity(e.target.value);
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
          appointmentDate={appointmentDate}
          selectedCity={selectedCity}
          handleSelectChange={handleSelectChange}
          handleDateChange={handleDateChange}
        />
      </>
    );
  }
  return null;
};

export default Appointment;
