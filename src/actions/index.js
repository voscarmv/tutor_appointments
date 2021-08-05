/* eslint-disable no-console */
import fetch from 'node-fetch';
import {
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
  ALERT_MESSAGE,
  AUTH_KEY,
  AUTH_CLEAR,
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_ERROR,
  FETCH_APPOINTMENT_REQUEST,
  FETCH_APPOINTMENT_SUCCESS,
  FETCH_APPOINTMENT_ERROR,
  POST_APPOINTMENT_REQUEST,
  POST_APPOINTMENT_SUCCESS,
  POST_APPOINTMENT_ERROR,
  UPDATE_SUBJECT,
  DISMISS_APPOINTMENT,
} from './action-types';

export const alertMessage = payload => ({ type: ALERT_MESSAGE, payload });
export const authKey = payload => ({ type: AUTH_KEY, payload });
export const authClear = payload => ({ type: AUTH_CLEAR, payload });
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
      'https://thawing-beyond-27762.herokuapp.com/signup',
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
      'https://thawing-beyond-27762.herokuapp.com/login',
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
      'https://thawing-beyond-27762.herokuapp.com/logout',
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
      'https://thawing-beyond-27762.herokuapp.com/subjects',
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

export const postAppointmentRequest = () => ({ type: POST_APPOINTMENT_REQUEST });
export const postAppointmentSuccess = () => ({ type: POST_APPOINTMENT_SUCCESS });
export const postAppointmentError = error => ({ type: POST_APPOINTMENT_ERROR, payload: error });

export const postAppointment = (data, key, history) => async dispatch => {
  dispatch(postAppointmentRequest());
  try {
    console.log(data);
    const jsonUpdate = { appointment: data };
    console.log(JSON.stringify(jsonUpdate));
    const getAppointment = await fetch(
      'https://thawing-beyond-27762.herokuapp.com/appointments',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: key,
        },
        body: JSON.stringify(jsonUpdate),
      },
    );
    if (getAppointment.status !== 201) {
      console.log(getAppointment);
      throw getAppointment.statusText;
    }
    dispatch(postAppointmentSuccess());
    history.push('/appointmentslist');
  } catch (e) {
    console.log(e);
    dispatch(postAppointmentError(e));
  }
};

export const fetchAppointmentRequest = () => ({ type: FETCH_APPOINTMENT_REQUEST });
export const fetchAppointmentSuccess = data => ({ type: FETCH_APPOINTMENT_SUCCESS, payload: data });
export const fetchAppointmentError = error => ({ type: FETCH_APPOINTMENT_ERROR, payload: error });
export const dismissAppointment = () => ({ type: DISMISS_APPOINTMENT });

export const fetchAppointment = data => async dispatch => {
  dispatch(fetchAppointmentRequest());
  try {
    console.log(data);
    const jsonUpdate = { appointment: data };
    console.log(JSON.stringify(jsonUpdate));
    const getAppointment = await fetch(
      'https://thawing-beyond-27762.herokuapp.com/appointments',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: data,
        },
      },
    );

    if (getAppointment.status !== 200) {
      throw getAppointment.statusText;
    }

    const appointmentJSON = await getAppointment.json();
    dispatch(fetchAppointmentSuccess(appointmentJSON));
  } catch (e) {
    console.log(e);
    dispatch(fetchAppointmentError(e));
  }
};
