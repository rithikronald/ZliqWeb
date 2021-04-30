import React from "react";
import logo from "../images/zliq_logo.svg";

const Navbar = () => {
  return (
    <nav className="web-nav">
      <div className="zliq-nav-logo-container">
        <img src={logo} className="zliq-nav-logo" />
        <p className="zliq-logo-text">Zliq</p>
      </div>
    </nav>
  );
};
export default Navbar;
