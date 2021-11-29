import React from "react";
import { HashLink } from "react-router-hash-link";
import footer_logo_creation from "../assets/images/landing-page/footer-logo-creation.webp";
import footer_logo_academy from "../assets/images/landing-page/footer-logo-academy.webp";
import location_icon from "../assets/images/landing-page/location-icon.webp";
import headphone_icon from "../assets/images/landing-page/headphone-icon.webp";
import email_icon from "../assets/images/landing-page/email-icon.webp";
export default function Footer() {
  return (
    <div>
      <div className="row footer">
        <div className="col-4">
          <div className="row footer-logo-group">
            <div className="col-6">
              <img className="creation" src={footer_logo_creation} alt="" srcset="" />
            </div>
            <div className="col-6">
              <img className="academy" src={footer_logo_academy} alt="" />
            </div>
          </div>
          <p>
            <img src={location_icon} alt="" srcset="" /> PO Box 16122 Collins
            Street West
          </p>
          <p>
            <img src={headphone_icon} alt="" srcset="" /> +880 1000 111 000
          </p>
          <p>
            <img src={email_icon} alt="" /> youremail@domain.com
          </p>
        </div>
        <div className="col-3    mob-col-4">
          <ul>
            <li className="title">Branch-01</li>
            <li>Address:PO Box 16122, Dhaka </li>
            <li>Contact:+880 01101101010</li>
            <li className="title">Branch-01</li>
            <li>Address:PO Box 16122, Dhaka </li>
            <li>Contact:+880 01101101010</li>
            <li className="title">Branch-01</li>
            <li>Address:PO Box 16122, Dhaka </li>
            <li>Contact:+880 01101101010</li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="title">Useful Links</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className="row copyright-section">
        <p>Copyright @ 2021 Banees</p> <p>Developed by Halcyon Digital</p>
      </div>
    </div>
  );
}
