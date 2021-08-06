import React from 'react';
import propTypes from 'prop-types';
import { Carousel, Button } from 'react-bootstrap';

const SubjectSelector = props => {
  const {
    error,
    loading,
    data,
    handleSubject,
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
          (s, i) => (
            <Carousel.Item key={s.name} className="c-container">
              <div className="carousel-content d-flex justify-content-center align-items-center flex-column">
                <img
                  alt={s.tutor}
                  src={s.tutorpic}
                  className="mockup"
                />
                <Carousel.Caption>
                  <Button onClick={handleSubject} value={i}>
                    {s.name}
                  </Button>
                  <h1 className="tutorname">{s.tutor}</h1>
                </Carousel.Caption>
              </div>
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
  handleSubject: propTypes.func.isRequired,
};

export default SubjectSelector;
