import "./Header.css";
import React, { useState } from "react";

export const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header>
      <div className="nav-menu">
        <div className="nav-logo">
          <img src="./ZoeLogo.png" alt="" srcset="" />
        </div>
        <button className="hamburger-button" onClick={toggleNavVisibility}>
          ☰
        </button>
        <ul className={`nav-items ${isNavVisible ? "visible" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#join">Join</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
