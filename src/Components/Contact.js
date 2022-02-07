import React, { useState } from "react";
import Academy_Navbar from "./Academy_Navbar";
import Navbar from "./Navbar";
export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  window.scrollTo(0, 0);
  function handleRegistrationForm() {
    setIsLoading(true);
    window.Email.send({
      SecureToken: "f134dd27-a459-477f-a259-47182b477905",
      To: process.env.REACT_APP_ADMIN_EMAIL,
      From: `${document.getElementsByName("email")[0].value}`,
      Subject: "Banees Official Site",
      Body: `
    Name : ${document.getElementsByName("name")[0].value} <br>
    Email : ${document.getElementsByName("email")[0].value} <br>
    Phone : ${document.getElementsByName("phone")[0].value} <br><br>
    Message : ${document.getElementsByName("message")[0].value}`,
    }).then((message) => {
      console.log(message);
      if (message === "OK") {
        // setIsLoading(false);
        document.getElementById("btn").innerText = "Email Sent";
      } else {
        // setIsLoading(false);
        document.getElementById("btn").innerText = "Try later";
      }
    });
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="contact-page">
        <div className="row">
          <div className="col-6 mob-col-12">
            <ul className="company-details">
              <div className="row">
                <h1 className="title">Contact Us at</h1>
              </div>
              <p>Banee’s Academy</p>
              <li>LIC No. TRAD/DSCC/0000/0000</li>
              <li>7/7, block C, Lalmatia, Dhaka</li>

              <li> +8801911667844</li>
              <li> banees.academy.creation@gmail.com</li>
            </ul>
          </div>
          <div className="col-6 mob-col-12">
            <div className="custom-order">
              <div className="registration-form" id="form-overlay">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleRegistrationForm();
                  }}
                >
                  <h3 className="title">Contact Form</h3>

                  <div className="form-body" id="form-body">
                    <label htmlFor="flavour">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      placeholder="full Name"
                    />
                    <label htmlFor="flavour">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                      required
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                      required
                      rows="4"
                      cols="50"
                      name="message"
                      id="message"
                      placeholder="Message"
                    />

                    <button className="btn" id="btn" disabled={isLoading}>
                      {isLoading ? "Loading..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
