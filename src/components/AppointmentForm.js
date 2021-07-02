import React from 'react';
import propTypes from 'prop-types';
// import { Form, Button } from 'react-bootstrap';
import { Dropdown, Button } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';

const AppointmentForm = ({
  cities, appointmentDate, handleSelectChange, handleDateChange,
}) => (
  <div>
    <Dropdown>
      <Dropdown.Toggle data-testid="breed_selector" variant="success" id="dropdown-basic">
        Choose
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {cities.map(
          breed => (
            <Dropdown.Item key={breed.id}>
              <Button
                type="button"
                classList="dropdown-item"
                key={breed}
                onClick={handleSelectChange}
                value={breed}
              >
                { breed }
              </Button>
            </Dropdown.Item>
          ),
        )}
      </Dropdown.Menu>
    </Dropdown>
    <DateTimePicker
      onChange={handleDateChange}
      value={appointmentDate}
    />
  </div>
);

AppointmentForm.propTypes = {
  cities: propTypes.arrayOf(propTypes.any).isRequired,
  appointmentDate: propTypes.string.isRequired,
  handleSelectChange: propTypes.func.isRequired,
  handleDateChange: propTypes.func.isRequired,
};

// LogIn.propTypes = {
//   handleUserChange: propTypes.func.isRequired,
//   handlePasswordChange: propTypes.func.isRequired,
//   handleSignUp: propTypes.func.isRequired,
// };

export default AppointmentForm;
