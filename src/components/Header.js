import React from 'react'
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <div className="header-container">
      <Navbar>
        <NavbarBrand href="/">
          <img src="../logo.png" alt="logo" className="logo" />
        </NavbarBrand>
        <div className="link-box">
          <ul>Login</ul>
          <ul>SignUp</ul>
        </div>
      </Navbar>
    </div>
  );
}

export default Header