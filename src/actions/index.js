/* eslint-disable no-console */
import fetch from 'node-fetch';
import {
  FETCH_BREEDS_REQUEST,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR,
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
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
    dispatch(fetchCatSuccess(catJSON));
  } catch (e) {
    console.log(e);
    dispatch(fetchCatError(e));
  }
};
