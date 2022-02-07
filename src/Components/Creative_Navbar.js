import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/landing-page/Banee's-Academy-Logo.webp";

export default function Creative_Navbar() {
  return (
    <div className="nav">
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
            <HashLink to="/custom_order#">
              <li className="nav-item">Custom Order</li>
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
