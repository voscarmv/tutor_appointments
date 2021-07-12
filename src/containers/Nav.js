import { Navbar, Button } from 'react-bootstrap';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLogOut, dismissAlert } from '../actions';
import AlertMsg from '../components/AlertMsg';

const Nav = () => {
  const authKeyState = useSelector(state => state.authState);
  const dispatch = useDispatch();
  const handleLogOut = e => {
    e.preventDefault();
    dispatch(fetchLogOut(authKeyState.key));
  };
  const alertData = useSelector(state => state.logOutState);
  const {
    content,
    type,
    show,
  } = alertData;
  const handleDismiss = () => {
    dispatch(dismissAlert());
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="flex-column col-2">
        <Navbar.Brand>
          <span className="mr-3" aria-label="tutor" role="img">👩‍🏫</span>
          <Link to="/">Tutor appointments</Link>
        </Navbar.Brand>
        <div className={`container-fluid${authKeyState.uid === null ? ' d-none' : ''}`}>
          <div className="ml-auto text-light">
            {authKeyState.email}
            <Button
              className="ml-3"
              onClick={handleLogOut}
            >
              Log out
            </Button>
          </div>
        </div>
      </Navbar>
      <AlertMsg
        content={content}
        type={type}
        show={show}
        handleDismiss={handleDismiss}
      />
    </>
  );
};
export default Nav;
