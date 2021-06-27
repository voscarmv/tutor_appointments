/* eslint-disable no-console */
import fetch from 'node-fetch';
import {
  FETCH_BREEDS_REQUEST,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR,
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_ERROR,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  FETCH_LOGOUT_REQUEST,
  FETCH_LOGOUT_SUCCESS,
  FETCH_LOGOUT_ERROR,
  DISMISS,
  DISMISS_SUBJECT,
  UPDATE_FILTER,
  ALERT_MESSAGE,
  AUTH_KEY,
  AUTH_CLEAR,
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_ERROR,
  UPDATE_SUBJECT,
} from './action-types';

export const alertMessage = payload => ({ type: ALERT_MESSAGE, payload });
export const authKey = payload => ({ type: AUTH_KEY, payload });
export const authClear = payload => ({ type: AUTH_CLEAR, payload });
export const updateFilter = payload => ({ type: UPDATE_FILTER, payload });
export const fetchBreedsRequest = () => ({ type: FETCH_BREEDS_REQUEST });
export const fetchBreedsSuccess = breeds => ({ type: FETCH_BREEDS_SUCCESS, payload: breeds });
export const fetchBreedsError = error => ({ type: FETCH_BREEDS_ERROR, payload: error });
export const fetchCatRequest = () => ({ type: FETCH_CAT_REQUEST });
export const fetchCatSuccess = cat => ({ type: FETCH_CAT_SUCCESS, payload: cat });
export const fetchCatError = error => ({ type: FETCH_CAT_ERROR, payload: error });
export const fetchBreeds = () => async dispatch => {
  dispatch(fetchBreedsRequest());
  try {
    const getBreeds = await fetch('https://api.thecatapi.com/v1/breeds');
    const breedsJSON = await getBreeds.json();
    dispatch(fetchBreedsSuccess(breedsJSON));
  } catch (e) {
    dispatch(fetchBreedsError(e));
  }
};
export const fetchCat = data => async dispatch => {
  dispatch(
    alertMessage(
      {
        content: 'Signing up...',
        type: 'info',
        show: true,
      },
    ),
  );
  dispatch(fetchCatRequest());
  try {
    const jsonUpdate = { user: data };
    console.log(JSON.stringify(jsonUpdate));
    const getCat = await fetch(
      'http://localhost:3002/signup',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(jsonUpdate),
      },
    );
    const catJSON = await getCat.json();
    console.log(catJSON);
    if (catJSON.exception) {
      throw catJSON.exception;
    }
    dispatch(
      alertMessage(
        {
          content: 'Signed up successfully.',
          type: 'success',
          show: true,
        },
      ),
    );
    dispatch(fetchCatSuccess(catJSON));
  } catch (e) {
    console.log(e);
    dispatch(
      alertMessage(
        {
          content: `Sign-up failed: ${e}`,
          type: 'danger',
          show: true,
        },
      ),
    );
    dispatch(fetchCatError(e));
  }
};
// BLOCC
export const fetchSignUpRequest = () => ({ type: FETCH_SIGNUP_REQUEST });
export const fetchSignUpSuccess = cat => ({ type: FETCH_SIGNUP_SUCCESS, payload: cat });
export const fetchSignUpError = error => ({ type: FETCH_SIGNUP_ERROR, payload: error });
export const dismissAlert = () => ({ type: DISMISS });

export const fetchSignUp = data => async dispatch => {
  dispatch(fetchSignUpRequest());
  try {
    const jsonUpdate = { user: data };
    console.log(JSON.stringify(jsonUpdate));
    const getCat = await fetch(
      'http://localhost:3002/signup',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(jsonUpdate),
      },
    );
    const catJSON = await getCat.json();
    console.log(catJSON);
    if (catJSON.exception) {
      throw catJSON.exception;
    }
    dispatch(fetchSignUpSuccess(catJSON));
  } catch (e) {
    console.log(e);
    dispatch(fetchSignUpError(e));
  }
};

export const fetchLogInRequest = () => ({ type: FETCH_LOGIN_REQUEST });
export const fetchLogInSuccess = () => ({ type: FETCH_LOGIN_SUCCESS });
export const fetchLogInError = error => ({ type: FETCH_LOGIN_ERROR, payload: error });

export const fetchLogIn = data => async dispatch => {
  dispatch(fetchLogInRequest());
  try {
    console.log(data);
    const jsonUpdate = { user: data };
    console.log(JSON.stringify(jsonUpdate));
    const getLogin = await fetch(
      'http://localhost:3002/login',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(jsonUpdate),
      },
    );
    const loginJSON = await getLogin.json();
    console.log(loginJSON);
    const userID = loginJSON.id;
    const userEmail = loginJSON.email;
    console.log(userID);
    const loginJWT = getLogin.headers.get('authorization');
    if (loginJWT === null) {
      throw new Error('Check your username and/or password.');
    }

    if (getLogin.status !== 200) {
      throw getLogin.statusText;
    }
    dispatch(authKey({ uid: userID, email: userEmail, key: loginJWT }));
    dispatch(fetchLogInSuccess(getLogin));
  } catch (e) {
    console.log(e);
    dispatch(fetchLogInError(e));
  }
};

export const fetchLogOutRequest = () => ({ type: FETCH_LOGOUT_REQUEST });
export const fetchLogOutSuccess = () => ({ type: FETCH_LOGOUT_SUCCESS });
export const fetchLogOutError = error => ({ type: FETCH_LOGOUT_ERROR, payload: error });

export const fetchLogOut = data => async dispatch => {
  dispatch(dismissAlert());
  dispatch(fetchLogOutRequest());
  try {
    console.log(data);
    const getLogout = await fetch(
      'http://localhost:3002/logout',
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: data,
        },
      },
    );
    if (getLogout.status !== 200) {
      throw getLogout.statusText;
    }
    dispatch(fetchLogOutSuccess());
    dispatch(authClear());
  } catch (e) {
    console.log(e);
    dispatch(fetchLogOutError(e));
  }
};

export const fetchSubjectsRequest = () => ({ type: FETCH_SUBJECTS_REQUEST });
export const fetchSubjectsSuccess = subj => ({ type: FETCH_SUBJECTS_SUCCESS, payload: subj });
export const fetchSubjectsError = error => ({ type: FETCH_SUBJECTS_ERROR, payload: error });
export const dismissSubject = () => ({ type: DISMISS_SUBJECT });

export const fetchSubjects = data => async dispatch => {
  dispatch(fetchSubjectsRequest());
  try {
    console.log(data);
    const getSubjects = await fetch(
      'http://localhost:3002/subjects',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: data,
        },
      },
    );
    if (getSubjects.status !== 200) {
      throw getSubjects.statusText;
    }
    console.log(getSubjects);
    const subj = await getSubjects.json();
    dispatch(fetchSubjectsSuccess(subj));
  } catch (e) {
    console.log(e);
    dispatch(fetchSubjectsError(e));
  }
};

export const updateSubject = subject => ({ type: UPDATE_SUBJECT, payload: subject });
