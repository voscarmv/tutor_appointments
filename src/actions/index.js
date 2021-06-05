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
  UPDATE_FILTER,
  ALERT_MESSAGE,
} from './action-types';

export const alertMessage = payload => ({ type: ALERT_MESSAGE, payload });
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

export const fetchSignUp = data => async dispatch => {
  dispatch(
    alertMessage(
      {
        content: 'Signing up...',
        type: 'info',
        show: true,
      },
    ),
  );
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
    dispatch(
      alertMessage(
        {
          content: 'Signed up successfully.',
          type: 'success',
          show: true,
        },
      ),
    );
    dispatch(fetchSignUpSuccess(catJSON));
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
    dispatch(fetchSignUpError(e));
  }
};

export const fetchLogInRequest = () => ({ type: FETCH_LOGIN_REQUEST });
export const fetchLogInSuccess = cat => ({ type: FETCH_LOGIN_SUCCESS, payload: cat });
export const fetchLogInError = error => ({ type: FETCH_LOGIN_ERROR, payload: error });

export const fetchLogIn = data => async dispatch => {
  dispatch(
    alertMessage(
      {
        content: 'Logging in...',
        type: 'info',
        show: true,
      },
    ),
  );
  dispatch(fetchLogInRequest());
  try {
    console.log(data);
    const jsonUpdate = { user: data };
    console.log(JSON.stringify(jsonUpdate));
    const getCat = await fetch(
      'http://localhost:3002/login',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(jsonUpdate),
      },
    );
    console.log(getCat);
    // const catJSON = await getCat.json();
    // console.log(getCat);
    if (getCat.status !== 200) {
      throw getCat.statusText;
    }
    dispatch(
      alertMessage(
        {
          content: 'Logged in successfully.',
          type: 'success',
          show: true,
        },
      ),
    );
    dispatch(fetchLogInSuccess(getCat));
  } catch (e) {
    console.log(e);
    dispatch(
      alertMessage(
        {
          content: `Log-in failed: ${e}`,
          type: 'danger',
          show: true,
        },
      ),
    );
    dispatch(fetchLogInError(e));
  }
};
