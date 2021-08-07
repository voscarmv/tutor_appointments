import fetch from 'node-fetch';
import {
  // FETCH_SIGNUP_REQUEST,
  // FETCH_SIGNUP_SUCCESS,
  // FETCH_SIGNUP_ERROR,
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
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './action-types';

export const alertMessage = payload => ({ type: ALERT_MESSAGE, payload });
export const authKey = payload => ({ type: AUTH_KEY, payload });
export const authClear = payload => ({ type: AUTH_CLEAR, payload });

export const fetchRequest = message => ({
  type: FETCH_REQUEST,
  message,
});

export const fetchSuccess = (data, message) => ({
  type: FETCH_SUCCESS,
  payload: data,
  message,
});

export const fetchError = (error, message) => ({
  type: FETCH_ERROR,
  payload: error,
  message,
});

// export const fetchSignUpRequest = () => ({ type: FETCH_SIGNUP_REQUEST });
// export const fetchSignUpSuccess = data => ({ type: FETCH_SIGNUP_SUCCESS, payload: data });
// export const fetchSignUpError = error => ({ type: FETCH_SIGNUP_ERROR, payload: error });
// export const dismissAlert = () => ({ type: DISMISS });

export const fetchSignUpRequest = () => fetchRequest({
  content: 'Signing up...',
  type: 'info',
  show: true,
});
export const fetchSignUpSuccess = data => (fetchSuccess(data, {
  content: 'Signed up successfully!',
  type: 'success',
  show: true,
}));
export const fetchSignUpError = error => (fetchError(error, {
  content: 'Failed to sign up.',
  type: 'danger',
  show: true,
}));

export const dismissAlert = () => ({ type: DISMISS });

export const fetchLogInRequest = () => ({ type: FETCH_LOGIN_REQUEST });
export const fetchLogInSuccess = () => ({ type: FETCH_LOGIN_SUCCESS });
export const fetchLogInError = error => ({ type: FETCH_LOGIN_ERROR, payload: error });

export const fetchLogIn = (data, history) => async dispatch => {
  dispatch(fetchLogInRequest());
  try {
    const jsonUpdate = { user: data };
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

    const userID = loginJSON.id;
    const userEmail = loginJSON.email;

    const loginJWT = getLogin.headers.get('authorization');
    if (loginJWT === null) {
      throw new Error('Check your username and/or password.');
    }

    if (getLogin.status !== 200) {
      throw getLogin.statusText;
    }
    dispatch(authKey({ uid: userID, email: userEmail, key: loginJWT }));
    dispatch(fetchLogInSuccess(getLogin));
    history.push('/subjects');
  } catch (e) {
    dispatch(fetchLogInError(e));
  }
};

export const fetchSignUp = (data, history) => async dispatch => {
  dispatch(fetchSignUpRequest());
  try {
    const jsonUpdate = { user: data };

    const getSignUp = await fetch(
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
    const signupJSON = await getSignUp.json();

    if (signupJSON.exception) {
      throw signupJSON.exception;
    }
    dispatch(fetchSignUpSuccess(signupJSON));
    dispatch(fetchLogIn(
      {
        email: data.email,
        password: data.password,
      }, history,
    ));
  } catch (e) {
    dispatch(fetchSignUpError(e));
  }
};

export const fetchLogOutRequest = () => ({ type: FETCH_LOGOUT_REQUEST });
export const fetchLogOutSuccess = () => ({ type: FETCH_LOGOUT_SUCCESS });
export const fetchLogOutError = error => ({ type: FETCH_LOGOUT_ERROR, payload: error });

export const fetchLogOut = (data, history) => async dispatch => {
  dispatch(dismissAlert());
  dispatch(fetchLogOutRequest());
  try {
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
    history.push('/login');
  } catch (e) {
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

    const subj = await getSubjects.json();
    dispatch(fetchSubjectsSuccess(subj));
  } catch (e) {
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
    const jsonUpdate = { appointment: data };

    const getAppointment = await fetch(
      'http://localhost:3002/appointments',
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
      throw getAppointment.statusText;
    }
    dispatch(postAppointmentSuccess());
    history.push('/appointmentslist');
  } catch (e) {
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
    const getAppointment = await fetch(
      'http://localhost:3002/appointments',
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
    dispatch(fetchAppointmentError(e));
  }
};
