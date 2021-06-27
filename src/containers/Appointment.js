import React from 'react';
import { useSelector } from 'react-redux';
import SubjectDisplay from '../components/SubjectDisplay';

const Appointment = () => {
  const subject = useSelector(state => state.subjectDisplayState);
  if (subject.name !== '') {
    const {
      name,
      tutor,
      description,
      tutorpic,
    } = subject;
    return (
      <SubjectDisplay
        name={name}
        tutor={tutor}
        description={description}
        tutorpic={tutorpic}
      />
    );
  }
  return null;
};

export default Appointment;
