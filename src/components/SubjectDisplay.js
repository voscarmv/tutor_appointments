import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import propTypes from 'prop-types';

const SubjectDisplay = props => {
  const {
    name,
    tutor,
    description,
    tutorpic,
  } = props;
  return (
    <div className="col-6">
      <Container className="m-3">
        <Row>
          <Col>
            <div>{name}</div>
            <div>{tutor}</div>
            <div>{description}</div>
          </Col>
          <Col>
            <div>
              <img className="w-75" alt={tutor} src={tutorpic} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

SubjectDisplay.propTypes = {
  name: propTypes.string.isRequired,
  tutor: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  tutorpic: propTypes.string.isRequired,
};

export default SubjectDisplay;
