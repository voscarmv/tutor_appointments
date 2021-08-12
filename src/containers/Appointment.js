import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
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
  const handleSelectChange = e => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
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
      <Container>
        <h1>Book an appointment</h1>
        <Row>
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
        </Row>
      </Container>
    );
  }
  return null;
};

export default Appointment;
