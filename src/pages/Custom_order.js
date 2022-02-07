import React, { useEffect, useState } from "react";
import Creative_Navbar from "../Components/Creative_Navbar";
import sendEmail from "../Components/Send_email";
import axios from "axios";
import Navbar from "../Components/Navbar";
const proxy = process.env.REACT_APP_PROXY;
const username = process.env.REACT_APP_API_USERNAME;
const password = process.env.REACT_APP_API_PASSWORD;

export default function Custom_order() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [flavour, setFlavour] = useState("");
  const [weight, setWeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [delivery, setDelivery] = useState("");
  const [image1_url, setimage1_url] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    axios
      .post(`${proxy}/jwt-auth/v1/token`, {
        username: username,
        password: password,
      })
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          setToken(res.data.token);
        }
      });
  }, []);
  function image1_upload() {
    const image1 =
      document.getElementById("sampleimage1") === null
        ? ""
        : document.getElementById("sampleimage1").files[0];

    var formData1 = new FormData();
    formData1.append("file", image1);
    axios
      .post(`${proxy}/wp/v2/media`, formData1, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          setimage1_url(res.data.guid.rendered);
          document.getElementById("sample-image-show-1").src =
            res.data.guid.rendered;
        }
      });
  }
  const [image2_url, setimage2_url] = useState("");
  function image2_upload() {
    const image2 =
      document.getElementById("sampleimage2") === null
        ? ""
        : document.getElementById("sampleimage2").files[0];

    var formData2 = new FormData();
    formData2.append("file", image2);
    axios
      .post(`${proxy}/wp/v2/media`, formData2, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          setimage2_url(res.data.guid.rendered);
          document.getElementById("sample-image-show-2").src =
            res.data.guid.rendered;
        }
      });
  }
  const [image3_url, setimage3_url] = useState("");
  function image3_upload() {
    const image3 =
      document.getElementById("sampleimage3") === null
        ? ""
        : document.getElementById("sampleimage3").files[0];

    var formData3 = new FormData();
    formData3.append("file", image3);
    axios
      .post(`${proxy}/wp/v2/media`, formData3, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          setimage3_url(res.data.guid.rendered);
          document.getElementById("sample-image-show-3").src =
            res.data.guid.rendered;
        }
      });
  }
  async function handleRegistrationForm() {
    var confirm = window.confirm("Are you sure to continue?");
    if (confirm) {
      setIsLoading(true);
      await axios
        .post(
          `${proxy}/wp/v2/customized_order`,
          {
            title: name,
            status: "pending",
            fields: {
              customer_name: name,
              image_1: image1_url,
              image_2: image2_url,
              image_3: image3_url,
              flavour: flavour,
              net_weight: weight,
              quantity: quantity,
              address: address,
              phone: phone,
              notes: notes,
              email: email,
              delivery_date: delivery,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else {
            window.scroll(0, 0);
            document.getElementById("form-overlay").style.width = "80%";
            document.getElementById(
              "form-body"
            ).innerHTML = `<div className="success-message">
                  <h3 className="title">
                      Thank you ${res.data.acf.customer_name} for your order. We will contact you soon.
                  </h3>
              </div>`;
            sendEmail(
              `${res.data.acf.email}`,
              `${process.env.REACT_APP_SENDER_EMAIL}`,
              "New Custom order Banees-creation",
              `
              images : ${res.data.acf.image_1} <br> ${res.data.acf.image_2}<br> ${res.data.acf.image_3} <br>
              Email : ${res.data.acf.email} <br>
              Name : ${res.data.acf.customer_name} <br>
              Address : ${res.data.acf.address} <br>
              Weight : ${res.data.acf.net_weight} <br>
              Quantity : ${res.data.acf.quantity} <br>
              Delivery Date : ${res.data.acf.delivery_date} <br><br><br>
              `
            );
          }
        });
    } else {
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="custom-order">
        <div className="registration-form" id="form-overlay">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegistrationForm();
            }}
          >
            <h3 className="title">Registration Form</h3>

            <div className="form-body" id="form-body">
              <label htmlFor="">Sample Image 1</label>
              <input
                required
                type="file"
                id="sampleimage1"
                name="sampleimage1"
                onChange={() => {
                  image1_upload();
                }}
              ></input>
              <img id="sample-image-show-1"></img>
              <label htmlFor="">Sample Image 2</label>
              <input
                required
                type="file"
                id="sampleimage2"
                name="sampleimage2"
                onChange={() => {
                  image2_upload();
                }}
              ></input>
              <img id="sample-image-show-2"></img>
              <label htmlFor="">Sample Image 3</label>
              <input
                required
                type="file"
                id="sampleimage3"
                name="sampleimage3"
                onChange={() => {
                  image3_upload();
                }}
              ></input>
              <img id="sample-image-show-3"></img>
              <label htmlFor="flavour">Flavour</label>
              <input
                required
                type="text"
                name="flavour"
                id="flavour"
                onChange={(e) => {
                  setFlavour(e.target.value);
                }}
              />
              <label htmlFor="weight">Weight</label>
              <input
                required
                type="text"
                name="weight"
                id="weight"
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
              />
              <label htmlFor="quantity">Quantity</label>
              <input
                required
                type="text"
                name="quantity"
                id="quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />

              <br />
              <label htmlFor="customer_name">Customer Name</label>
              <input
                required
                type="text"
                name="customer_name"
                id="customer_name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <label for="address">Address</label>
              <input
                required
                type="text"
                name="address"
                id="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <label for="customer_email">Email</label>
              <input
                required
                type="text"
                name="customer_email"
                id="customer_email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label for="customer_phone">Contact Number</label>
              <input
                required
                type="text"
                name="customer_phone"
                id="customer_phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <label for="customer_phone">Special Notes</label>
              <input
                required
                type="text"
                name="notes"
                id="notes"
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
              <label for="delivery">Delivery Date:</label>
              <input
                required
                type="date"
                id="delivery"
                name="delivery"
                onChange={(e) => {
                  setDelivery(new Date(e.target.value).toDateString());
                }}
              />
              <div className="row">
                {isLoading ? (
                  "Loading..."
                ) : (
                  <button className="btn">Submit</button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
