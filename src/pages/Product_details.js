import React from "react";
import { HashLink } from "react-router-hash-link";
import product_1 from "../assets/images/cake-1.png";
import call_icon from "../assets/images/call-icon.png";
import background from "../assets/images/product-details-background.png";
import Navbar from "../Components/Navbar";
export default function Product_details() {
  return (
    <>
      <Navbar></Navbar>
      <section id=""></section>
      <div className="product-details">
        <div className="row">
          <div className="col-6 mob-col-10 image-section">
            <img src={product_1} alt="" srcset="" />
            <div className="row">
              <div className="col-3">
                <img src={product_1} alt="" srcset="" />
              </div>
              <div className="col-3">
                <img src={product_1} alt="" srcset="" />
              </div>
              <div className="col-3">
                <img src={product_1} alt="" srcset="" />
              </div>
            </div>
          </div>
          <div className="col-6 mob-col-10">
            <div className="description">
              <p className="name">Product Name</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias molestiae voluptate aspernatur nobis doloribus eos?
              </p>
              <p className="weight">Net Weight: </p>
              <p className="price">BDT. 1500/-</p>
              <div className="location">
                <h4>Call for your pickup:</h4>
                <div className="row branch">
                  <div className="col-8">
                    <p className="branch-name">Branch-01</p>
                    <p>Address: </p>
                    <p>Contact No: </p>
                  </div>
                  <div className="col-2">
                    <img src={call_icon} alt="" srcset="" />
                  </div>
                </div>
                <div className="row branch">
                  <div className="col-8">
                    <p className="branch-name">Branch-01</p>
                    <p>Address: </p>
                    <p>Contact No: </p>
                  </div>
                  <div className="col-2">
                    <img src={call_icon} alt="" srcset="" />
                  </div>
                </div>
                <div className="row branch">
                  <div className="col-8">
                    <p className="branch-name">Branch-01</p>
                    <p>Address: </p>
                    <p>Contact No: </p>
                  </div>
                  <div className="col-2">
                    <img src={call_icon} alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="more-section">
        <div className="details">
          <h3 className="title">Details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse
            voluptates eius fugiat ipsum animi reiciendis rem quasi, expedita
            labore autem, eos soluta harum unde quibusdam. Dolor aliquam minima
            odit dolores consequuntur ducimus est distinctio commodi magni vel
            necessitatibus deserunt nobis natus tempora nesciunt, quod
            dignissimos quo ea maxime, delectus, temporibus eum? Sint culpa,
            error accusantium quibusdam adipisci animi corrupti ipsum asperiores
            magnam cum ad odit molestias maxime magni vero velit vitae, nemo
            earum facere. Totam id beatae quasi culpa inventore deleniti et nisi
            recusandae ut ipsa consequatur quas quis, odio corrupti nostrum
            maxime quam eius sunt ex perspiciatis alias quod minima ipsam. Odio
            nihil natus, error, perspiciatis possimus magnam, doloribus at ullam
            quia praesentium id inventore. Delectus blanditiis suscipit, neque
            aspernatur doloribus possimus reiciendis.
          </p>
        </div>
        <div className="related-products">
          <h3 className="title">
            <span className="sec-1">Related</span> &nbsp;
            <span className="sec-2">Products</span>
          </h3>
          <div className="row">
            <HashLink to="/creation/product_details/1#Product name 1">
              <div className="product-card">
                <img src={product_1} alt="" />
                <div className="desc">
                  <p className="name">Product name 1</p>
                  <p className="price">BDT. 1500</p>
                </div>
              </div>
            </HashLink>
            <HashLink to="/creation/product_details/1#Product name 1">
              <div className="product-card">
                <img src={product_1} alt="" />
                <div className="desc">
                  <p className="name">Product name 1</p>
                  <p className="price">BDT. 1500</p>
                </div>
              </div>
            </HashLink>
            <HashLink to="/creation/product_details/1#Product name 1">
              <div className="product-card">
                <img src={product_1} alt="" />
                <div className="desc">
                  <p className="name">Product name 1</p>
                  <p className="price">BDT. 1500</p>
                </div>
              </div>
            </HashLink>
            <HashLink to="/creation/product_details/1#Product name 1">
              <div className="product-card">
                <img src={product_1} alt="" />
                <div className="desc">
                  <p className="name">Product name 1</p>
                  <p className="price">BDT. 1500</p>
                </div>
              </div>
            </HashLink>
            <HashLink to="/creation/product_details/1#Product name 1">
              <div className="product-card">
                <img src={product_1} alt="" />
                <div className="desc">
                  <p className="name">Product name 1</p>
                  <p className="price">BDT. 1500</p>
                </div>
              </div>
            </HashLink>
            <HashLink to="/creation/product_details/1#Product name 1">
              <div className="product-card">
                <img src={product_1} alt="" />
                <div className="desc">
                  <p className="name">Product name 1</p>
                  <p className="price">BDT. 1500</p>
                </div>
              </div>
            </HashLink>
            <HashLink to="/creation/product_details/1#Product name 1">
              <div className="product-card">
                <img src={product_1} alt="" />
                <div className="desc">
                  <p className="name">Product name 1</p>
                  <p className="price">BDT. 1500</p>
                </div>
              </div>
            </HashLink>
            <HashLink to="/creation/product_details/1#Product name 1">
              <div className="product-card">
                <img src={product_1} alt="" />
                <div className="desc">
                  <p className="name">Product name 1</p>
                  <p className="price">BDT. 1500</p>
                </div>
              </div>
            </HashLink>
            <HashLink to="/creation/product_details/1#Product name 1">
              <div className="product-card">
                <img src={product_1} alt="" />
                <div className="desc">
                  <p className="name">Product name 1</p>
                  <p className="price">BDT. 1500</p>
                </div>
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
}
