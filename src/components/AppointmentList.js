import React from 'react';
import propTypes from 'prop-types';

const AppointmentList = ({ appointments }) => (
  <ul>
    {appointments.map(
      ap => (
        <li key={ap.id}>
          {ap.subject.name}
          {' '}
          with
          {' '}
          {ap.subject.tutor}
          {' '}
          at
          {' '}
          {ap.date}
          {' '}
          in
          {' '}
          {ap.city}
        </li>
      ),
    )}
  </ul>
);

AppointmentList.propTypes = {
  appointments: propTypes.arrayOf(propTypes.any).isRequired,
};

export default AppointmentList;
