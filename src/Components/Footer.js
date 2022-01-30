import React from "react";
import footer_logo_creation from "../assets/images/landing-page/footer-logo-creation.webp";
import footer_logo_academy from "../assets/images/landing-page/footer-logo-academy.webp";
import location_icon from "../assets/images/landing-page/location-icon.webp";
import headphone_icon from "../assets/images/landing-page/headphone-icon.webp";
import email_icon from "../assets/images/landing-page/email-icon.webp";
import fb from "../assets/images/landing-page/fb.webp";
import youtube from "../assets/images/landing-page/youtube.webp";
import insta from "../assets/images/landing-page/insta.webp";
import twitter from "../assets/images/landing-page/twiter.webp";
import { useQuery } from "react-query";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
const proxy = process.env.REACT_APP_PROXY;
const ck = process.env.REACT_APP_CK;
const cs = process.env.REACT_APP_CS;
const getBranchLocation = async (x) => {
  const data = await axios
    .get(`${proxy}/wp/v2/branches`, {
      auth: {
        username: ck,
        password: cs,
      },
    })
    .then((res) => {
      return res.data;
    });
  return data;
};
export default function Footer() {
  const { data: branchLocation, status: branchStatus } = useQuery(
    ["Branches"],
    getBranchLocation
  );
  return (
    <div>
      <div className="row footer">
        <div className="col-4">
          <div className="row footer-logo-group">
            <div className="col-6">
              <img
                className="creation"
                src={footer_logo_creation}
                alt=""
                srcset=""
              />
            </div>
            <div className="col-6">
              <img className="academy" src={footer_logo_academy} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src={location_icon} alt="" srcset="" />
            </div>
            <div className="col-10">
              <p>House: Otendrila, 4/4/1-B, Block A, Lalmatia, Dhaka-1207</p>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src={headphone_icon} alt="" srcset="" />
            </div>
            <div className="col-10">
              <p>+8801701224758</p>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src={email_icon} alt="" srcset="" />
            </div>
            <div className="col-10">
              <p>banees.academy.creation@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-3    mob-col-4">
          <ul>
            {branchLocation && branchLocation.length
              ? branchLocation.map((branch, key) => (
                  <>
                    <li className="title" dangerouslySetInnerHTML={{__html:branch.title.rendered}}></li>
                    <li>Address:&nbsp;{branch.acf.address} </li>
                    <li>Contact:&nbsp;{branch.acf.phone}</li>
                  </>
                ))
              : null}
          </ul>
        </div>
        <div className="col-3">
          {/* <p>Also seen on</p> */}
          <div className="row social-icon-group">
            <a href="https://www.facebook.com/BaneesCreation" target="_blank">
              <img src={fb}></img>
            </a>
            <a href="https://www.facebook.com/BaneesCreation" target="_blank">
              <img src={insta}></img>
            </a>
            <a href="https://www.facebook.com/BaneesCreation" target="_blank">
              <img src={twitter}></img>
            </a>
            <a href="https://www.facebook.com/BaneesCreation" target="_blank">
              <img src={youtube}></img>
            </a>
          </div>
          <ul>
            <li className="title">Useful Links</li>
            <HashLink to="/creation#">
              <li>Banee's creation</li>
            </HashLink>
            <HashLink to="/academy#">
              <li>Banee's Academy</li>
            </HashLink>
            <HashLink to="/gallary#">
              <li>Gallary</li>
            </HashLink>
            <HashLink to="/contact#">
              <li>Contact Us</li>
            </HashLink>
          </ul>
        </div>
      </div>
      <div className="row copyright-section">
        <p>Copyright @ 2021 Banees</p> <p>Developed by Halcyon Digital</p>
      </div>
    </div>
  );
}
