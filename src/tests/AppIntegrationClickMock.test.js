import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from '../containers/App';
import 'regenerator-runtime/runtime';
import * as actions from '../actions/index';

jest.mock('../actions/index');

describe('App', () => {
  beforeEach(() => {
    actions.fetchSignUp.mockImplementation(
      () => ({
        type: 'FETCH_SUCCESS',
        payload: { id: 1, email: 'oscar@gmail.com', key: 'test_jwt' },
        message: {
          content: 'Signed up successfully!',
          type: 'success',
          show: true,
        },
      }),
    );
    actions.dismissAlert.mockImplementation(
      () => ({ type: 'DISMISS' }),
    );
  });
  afterEach(() => {
    actions.fetchSignUp.mockRestore();
    actions.dismissAlert.mockRestore();
  });
  test('Successful signup', async () => {
    const fullApp = render(<Provider store={store}><App /></Provider>);
    const { getByTestId, asFragment } = fullApp;
    fireEvent.click(getByTestId('signup_menu'));
    await waitFor(
      () => {
        expect(screen.getByText('We will never share your email with anyone else.'));
      },
    );
    fireEvent.change(getByTestId('email'), 'oscar@mail.com');
    fireEvent.change(getByTestId('password'), 'oscar@mail.com');
    fireEvent.click(getByTestId('submit_signup'));
    await waitFor(
      () => {
        expect(screen.getByText('Signed up successfully!'));
      },
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
