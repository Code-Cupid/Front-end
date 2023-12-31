import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Components.css";

const Navigation = ({ currentUser, currentReadme, logoutUser }) => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <Navbar>
        <NavbarBrand href="/">
          <img src="../logo.png" alt="logo" className="logo" />
        </NavbarBrand>
        <Nav className="nav">
          {currentUser ? (
            <>
              <NavItem className="nav-item">
                <Link to="/userindex" className="nav-link">
                  Meet Others
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    logoutUser();
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </NavItem>

              <NavItem className="nav-item">
                <Link to="/new" className="nav-link">
                  Create a Readme
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link to="/readme/12" className="nav-link">
                  Show My Readme
                </Link>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem className="nav-item">
                <Link to="/login" className="nav-link">
                  Log In
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
