import React from "react";
import logo from "./images/zliq_logo.svg";
import Logo from "./Components/Logo";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

function App() {
  return (
    <div className="global-container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
