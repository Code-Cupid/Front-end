import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar>
        <NavbarBrand href="/">
          <img src="../logo.png" alt="logo" className="logo" />
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
