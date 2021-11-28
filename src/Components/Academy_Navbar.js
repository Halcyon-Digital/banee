import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/header-logo-academy.png";

export default function Academy_Navbar() {
  return (
    <div className="nav academy-nav">
      <div className="row nav-bar">
        <HashLink to='/'>
          <div className="logo">
            <img src={logo} alt="" srcset="" />
          </div>
        </HashLink>
        <div className="nav-item-group">
          <ul>
            <HashLink to="/gallary#">
              <li className="nav-item">Gallary</li>
            </HashLink>
            <HashLink to="/contact_us#">
              <li className="nav-item">Contact Us</li>
            </HashLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
