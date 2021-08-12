import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubjects, dismissSubject, updateSubject } from '../actions/index';
import Subjects from '../components/Subjects';

const SubjectsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const subjectsData = useSelector(state => state.fetchState);
  const authKeyState = useSelector(state => state.authState);
  const {
    data,
    error,
  } = subjectsData;
  useEffect(
    () => {
      dispatch(fetchSubjects(authKeyState.key));
      return () => {
        dispatch(dismissSubject());
      };
    },
    [],
  );
  const handleSubject = e => {
    history.push('/appointment');
    dispatch(updateSubject(subjectsData.data[e.target.value]));
  };
  return (
    <div>
      <h1>Choose a subject</h1>
      <p>
        Click on the button with the name of the subject you
        wish to schedule for tutorial. Click on the side arrows to browse subjects.
      </p>
      <Subjects
        error={error}
        data={data}
        handleSubject={handleSubject}
      />
    </div>
  );
};

export default SubjectsPage;
