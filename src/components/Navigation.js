import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Components.css";

const Navigation = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/')
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="header-container">
      <Navbar>
        <NavbarBrand href="/">
          <img src="../logo.png" alt="logo" className="logo" />
        </NavbarBrand>
      </Navbar>
      <Nav className="nav">
        {currentUser ? (
          <NavItem className="nav-item">
            <button onClick={() => handleLogout()}>Logout</button>
            <button onClick={() => handleNavigation("/userindex")}>Other Users</button>
          </NavItem>
        ) : (
          <NavItem className="nav-item">
            <button onClick={() => handleNavigation("/login")}>Login</button>
            <button onClick={() => handleNavigation("/signup")}>Signup</button>
          </NavItem>
        )}
      </Nav>
    </div>
  );
};

export default Navigation;
