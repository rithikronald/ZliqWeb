import React from "react";
import Logo from "./Logo";
import logo from "../images/zliq_logo.svg";
import Button from "./Button";

const SectionFirst = () => {
  return (
    <div className="section-first">
      <div className="slogan-container">
        <p className="slogan">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p className="sub-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <a href="#footer" className="button">
          Contact Us
        </a>
      </div>
      <div className="avatar-container">
        <img src={logo} className="avatar" />
      </div>
    </div>
  );
};
export default SectionFirst;
