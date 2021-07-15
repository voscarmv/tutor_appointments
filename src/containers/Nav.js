import { Navbar, Button, Nav } from 'react-bootstrap';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLogOut, dismissAlert } from '../actions';
import AlertMsg from '../components/AlertMsg';

const NavB = () => {
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
      <Navbar variant="dark" className="flex-column col-2">
        <Navbar.Brand>
          <span className="mr-3" aria-label="tutor" role="img">👩‍🏫</span>
          <Link to="/">Tutor appointments</Link>
        </Navbar.Brand>
        <Nav className="flex-column w-100">
          <Nav.Item className="m-auto a-hover w-100 text-center"><Link className="nav-link-custom" to="/login"><div className="link-box">Log In</div></Link></Nav.Item>
          <Nav.Item className="m-auto"><Link to="/signup">Sign Up</Link></Nav.Item>
          <Nav.Item className="m-auto"><Link to="/subjects">Subjects</Link></Nav.Item>
          <Nav.Item className="m-auto"><Link to="/appointmentslist">Appointments</Link></Nav.Item>
        </Nav>
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
export default NavB;
