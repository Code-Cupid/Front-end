import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap"; 
import '../styles/Components.css'

const Navigation = ({ currentUser, setCurrentUser }) => {
  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Nav className="nav">
      {currentUser ? (
        <NavItem>
          <input type="button" value="Logout" onClick={handleLogout} />
        </NavItem>
      ) : (
        <>
          <NavItem>
            <NavLink to="/login" className="nav-link">
              Log In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </NavItem>
        </>
      )}
    </Nav>
  );
};

export default Navigation;
