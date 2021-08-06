/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubjects, dismissSubject, updateSubject } from '../actions/index';
import Subjects from '../components/Subjects';

const SubjectsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const subjectsData = useSelector(state => state.subjectsState);
  const authKeyState = useSelector(state => state.authState);
  const {
    error,
    data,
    loading,
  } = subjectsData;
  useEffect(
    () => {
      console.log('Entering subjects page');
      dispatch(fetchSubjects(authKeyState.key));
      return () => {
        console.log('Exiting subjects page');
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
      <Subjects
        error={error}
        data={data}
        loading={loading}
        handleSubject={handleSubject}
      />
    </div>
  );
};

export default SubjectsPage;
