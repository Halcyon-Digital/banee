import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/header-logo-academy.webp";

export default function Academy_Navbar() {
  return (
    <div className="nav academy-nav">
      <div className="row nav-bar">
        <HashLink to="/">
          <div className="logo">
            <img src={logo} alt="" srcSet="" />
          </div>
        </HashLink>
        <div className="nav-item-group">
          <ul>
            <HashLink to="/">
              <li className="nav-item">Home</li>
            </HashLink>
            <HashLink to="/gallary#">
              <li className="nav-item">Gallary</li>
            </HashLink>
            <HashLink to="/contact#">
              <li className="nav-item">Contact Us</li>
            </HashLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
