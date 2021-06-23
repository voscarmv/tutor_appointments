/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubjects, dismissSubject } from '../actions/index';
import Subjects from '../components/Subjects';

const SubjectsPage = () => {
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
  return (
    <div>
      <Subjects
        error={error}
        data={data}
        loading={loading}
      />
    </div>
  );
};

export default SubjectsPage;
