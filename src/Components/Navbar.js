import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/landing-page/header-logo-creation.webp";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="row nav-bar">
        <HashLink to="/">
          <div className="logo">
            <img src={logo} alt="" srcset="" />
          </div>
        </HashLink>

        <div className="nav-item-group">
          <ul>
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
