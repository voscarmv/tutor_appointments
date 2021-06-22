import React from 'react';
import propTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

const SubjectSelector = ({ subjectsData }) => {
  if (subjectsData.error) {
    return (
      <div>ERROR</div>
    );
  }
  if (subjectsData.loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <Carousel>
      {
        subjectsData.map(
          s => (
            <Carousel.Item key={s.name}>
              <img
                alt={s.tutor}
                src={s.tutorpic}
              />
              <Carousel.Caption>
                <h3>{s.name}</h3>
                <p>{s.tutor}</p>
                <p>{s.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ),
        )
      }
    </Carousel>
  );
};

SubjectSelector.propTypes = {
  subjectsData: propTypes.arrayOf(propTypes.any).isRequired,
  // handleSelectChange: propTypes.func.isRequired,
};

export default SubjectSelector;
