import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SubjectDisplay from '../components/SubjectDisplay';
import AppointmentForm from '../components/AppointmentForm';
import { postAppointment } from '../actions/index';

const Appointment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const subject = useSelector(state => state.subjectDisplayState);
  const authKeyState = useSelector(state => state.authState);
  const [appointmentDate, handleDateChange] = useState(new Date());
  const [selectedCity, setCity] = useState('Paris');
  // const [newAppointment, setNewAppointment] = useState(
  //   {
  //     city: 'Paris',
  //     date: appointmentDate,
  //     user_id: authKeyState.uid,
  //     subject_id: subject.id,
  //   },
  // );
  const handleSelectChange = e => {
    e.preventDefault();
    setCity(e.target.value);
  };
  // const handleDateChange = e => {
  //   setNewAppointment(
  //     {
  //       ...newAppointment,
  //       date: e.target.value,
  //     },
  //   );
  // };
  const handleSubmit = e => {
    e.preventDefault();
    // setNewAppointment(
    //   {
    //     ...newAppointment,
    //     date: appointmentDate,
    //   },
    // );
    dispatch(postAppointment({
      city: selectedCity,
      date: appointmentDate,
      user_id: authKeyState.uid,
      subject_id: subject.id,
    }, authKeyState.key, history));
  };
  if (subject.name !== '') {
    const {
      name,
      tutor,
      description,
      tutorpic,
    } = subject;
    return (
      <div className="container-fluid d-flex">
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
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
  return null;
};

export default Appointment;
