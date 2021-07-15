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
            <Carousel.Item key={s.name}>
              <img
                alt={s.tutor}
                src={s.tutorpic}
                className="mockup"
              />
              <Carousel.Caption>
                <Button onClick={handleSubject} value={i}>
                  {s.name}
                </Button>
                <p>{s.tutor}</p>
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
  handleSubject: propTypes.func.isRequired,
};

export default SubjectSelector;
