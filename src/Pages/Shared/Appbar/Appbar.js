import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Appbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Car Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/explore">
                Explore
              </NavLink>
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
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
