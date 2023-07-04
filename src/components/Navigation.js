import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Components.css";

const Navigation = ({ currentUser, logoutUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
    navigate('/')
  };

  return (
    <div className="header-container">
      <Navbar>
        <NavbarBrand href="/">
          <img src="../logo.png" alt="logo" className="logo" />
        </NavbarBrand>
      </Navbar>
      <Nav className="nav">
        <NavItem className="nav-item">
          <NavLink href="/userindex" className="nav-link">
            See All Readmes
          </NavLink>
        </NavItem>
        {currentUser ? (
          <>
            <NavItem className="nav-item">
              <button onClick={() => handleLogout()}>Logout</button>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/new" className="nav-link">
                Create a Readme
              </NavLink>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem className="nav-item">
              <NavLink href="/login" className="nav-link">
                Log In
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/signup" className="nav-link">
                Sign Up
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Navigation;
