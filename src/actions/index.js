/* eslint-disable no-console */
import fetch from 'node-fetch';
import request from 'request';
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
  LOGIN_DISMISS,
  UPDATE_FILTER,
  ALERT_MESSAGE,
  AUTH_KEY,
} from './action-types';

export const alertMessage = payload => ({ type: ALERT_MESSAGE, payload });
export const authKey = payload => ({ type: AUTH_KEY, payload });
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
export const fetchLogInSuccess = () => ({ type: FETCH_LOGIN_SUCCESS });
export const fetchLogInError = error => ({ type: FETCH_LOGIN_ERROR, payload: error });
export const logInDismiss = () => ({ type: LOGIN_DISMISS });

export const fetchLogIn = data => async dispatch => {
  dispatch(fetchLogInRequest());
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
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'en-US,en;q=0.8',
          'content-type': 'application/json',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36',
        },
        body: JSON.stringify(jsonUpdate),
      },
    );
    // console.log(await getLogin.json());
    const loginJSON = getLogin.headers.get('authorization');
    if (loginJSON === null) {
      throw new Error('Check your username and/or password.');
    }
    // const outJSON = await getLogin.json();
    // console.log(outJSON);
    console.log(loginJSON);
    // const bodyresp = await getLogin.json();
    // console.log(bodyresp);
    getLogin.headers.forEach(
      (v, n) => {
        console.log(`name ${n}`);
        console.log(`val ${v}`);
      },
    );

    request(
      {
        uri: 'http://localhost:3002/login',
        headers: {
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'en-US,en;q=0.8',
          'content-type': 'application/json',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36',
        },
        method: 'POST',
        body: JSON.stringify(jsonUpdate),
      },
      (err, httpResponse) => {
        if (err) {
          return console.error(err);
        }
        console.log(httpResponse);
        return true;
      },
    );

    // console.log(getLogin);
    if (getLogin.status !== 200) {
      throw getLogin.statusText;
    }
    dispatch(fetchLogInSuccess(getLogin));
  } catch (e) {
    console.log(e);
    dispatch(fetchLogInError(e));
  }
};
