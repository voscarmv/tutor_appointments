import React from 'react';
import propTypes from 'prop-types';
import { Dropdown, Button, Row } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';

const AppointmentForm = ({
  cities, selectedCity, appointmentDate, handleSelectChange, handleDateChange, handleSubmit,
}) => (
  <Row className="col-lg-6 col-12 flex-column">
    {selectedCity}
    <Dropdown>
      <Dropdown.Toggle data-testid="breed_selector" variant="success" id="dropdown-basic">
        Choose
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {cities.map(
          breed => (
            <Dropdown.Item key={breed}>
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
    <Button onClick={handleSubmit}>
      Submit
    </Button>
  </Row>
);

AppointmentForm.propTypes = {
  cities: propTypes.arrayOf(propTypes.any).isRequired,
  selectedCity: propTypes.string.isRequired,
  appointmentDate: propTypes.string.isRequired,
  handleSelectChange: propTypes.func.isRequired,
  handleDateChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

// LogIn.propTypes = {
//   handleUserChange: propTypes.func.isRequired,
//   handlePasswordChange: propTypes.func.isRequired,
//   handleSignUp: propTypes.func.isRequired,
// };

export default AppointmentForm;
