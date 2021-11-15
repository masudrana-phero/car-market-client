import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import './Appbar.css';

const Appbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#home"><span className="font-style">m</span><span className="text-style">otoros</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-center align-items-center">
              <NavLink className="nav-link text-white " to="/home">
                <h5>Home</h5>
              </NavLink>
              <NavLink className="nav-link text-white" to="/explore">
                <h5>Explore</h5>
              </NavLink>
              <NavLink className="nav-link text-white" to="/dashboard">
                <h5>Dashboard</h5>
              </NavLink>
              <NavLink className="nav-link text-white" to="/contact">
                <h5>Contact us</h5>
              </NavLink>
              {user.email ? (
                <>
                  <p className="mt-2">
                    Login as:{" "}
                    <small className="fw-bold text-warning">
                      {user.displayName}
                    </small>
                  </p>
                  <Button onClick={logOut} variant="danger">
                    {" "}
                    Log Out
                  </Button>
                </>
              ) : (
                <NavLink className="nav-link" to="/login">
                  <Button variant="success"> Log In</Button>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Appbar;
