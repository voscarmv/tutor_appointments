import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SubjectDisplay from '../components/SubjectDisplay';
import AppointmentForm from '../components/AppointmentForm';

const Appointment = () => {
  const subject = useSelector(state => state.subjectDisplayState);
  const [appointmentDate, handleDateChange] = useState(new Date());
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
          handleSelectChange={() => {}}
          handleDateChange={handleDateChange}
        />
      </>
    );
  }
  return null;
};

export default Appointment;
