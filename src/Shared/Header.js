import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
//import useAuth from "../Hooks/useAuth";

const Header = () => {
  const activeStyle = {
    color: "white",
    textDecoration: "none",
  };
  //const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="./logo.png"
              width="50"
              height="50"
              className="d-inline-block "
            />{" "}
            <NavLink to="/home" style={activeStyle}>
              Shutter: Premium Camera Shop
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link style={activeStyle} as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link style={activeStyle} as={Link} to="/explore">
              Explore Products
            </Nav.Link>
            {/* {user?.email ? (
              <>
                <Navbar.Text>
                  <span style={activeStyle}>
                    Signed in as: {user?.displayName}
                  </span>
                  <Button variant="light" onClick={logOut} className="ms-3">
                    Log Out
                  </Button>
                </Navbar.Text>
                <Nav.Link style={activeStyle} as={Link} to="/dashboard">
                  <Button variant="light" className="ms-3">
                    Dashboard
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link style={activeStyle} as={Link} to="/login">
                Login
              </Nav.Link>
            )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
