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
      <Navbar expand="lg" className="flex-column col-lg-2 col-12">
        <Navbar.Brand>
          <Link className="vespa-text" to="/">
            <div>
              Tutor
              <br />
              appointments
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column w-100 mt-auto mb-auto">
            <Nav.Item className="m-auto a-hover w-100 text-center"><Link className="nav-link-custom" to="/subjects"><div className="link-box">SUBJECTS</div></Link></Nav.Item>
            <Nav.Item className="m-auto a-hover w-100 text-center"><Link className="nav-link-custom" to="/appointmentslist"><div className="link-box">APPOINTMENTS</div></Link></Nav.Item>
            <Nav.Item className="m-auto a-hover w-100 text-center"><Link className="nav-link-custom" to="/login"><div className="link-box">LOGIN</div></Link></Nav.Item>
            <Nav.Item className="m-auto a-hover w-100 text-center"><Link className="nav-link-custom" to="/signup"><div className="link-box">SIGNUP</div></Link></Nav.Item>
          </Nav>
          <div className={`mt-auto${authKeyState.uid === null ? ' d-none' : ''}`}>
            <div className="flex-column">
              <div>
                {authKeyState.email}
              </div>
              <Button
                className="ml-3"
                onClick={handleLogOut}
              >
                Log out
              </Button>
            </div>
          </div>

          <AlertMsg
            content={content}
            type={type}
            show={show}
            handleDismiss={handleDismiss}
          />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavB;
