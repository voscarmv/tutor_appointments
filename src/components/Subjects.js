import React from 'react';
import propTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

const SubjectSelector = props => {
  const {
    error,
    loading,
    data,
  } = props;
  if (error) {
    return (
      <div>ERROR</div>
    );
  }
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <Carousel>
      {
        data.map(
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
  error: propTypes.string.isRequired,
  data: propTypes.arrayOf(propTypes.any).isRequired,
  loading: propTypes.bool.isRequired,
};

export default SubjectSelector;
