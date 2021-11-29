import React from "react";
import hero_image from "../assets/images/creation-hero-image.png";
import product_1 from "../assets/images/cake-1.png";
import background from "../assets/images/creation-background.png";
import { HashLink } from "react-router-hash-link";
import Navbar from "../Components/Navbar";

export default function Creation() {
  return (
    <div>
      <Navbar></Navbar>
      <section id=""></section>
      <div className="hero-area">
        <div className="hero-content">
          <img src={hero_image} alt="" srcset="" />
        </div>

        <div className="creation-page">
          <p className="title">
            <span className="sec-1">All</span>&nbsp;
            <span className="sec-2">Products</span>
          </p>
          <div className="product-show-case">
            <div className="title"></div>
            <div className="row">
              <HashLink to="/creation/products/1# ">
                <div className="product-card">
                  <img src={product_1} alt="" />
                  <div className="desc">
                    <p className="name">Product name 1</p>
                    <p className="price">BDT. 1500</p>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/creation/products/1# ">
                <div className="product-card">
                  <img src={product_1} alt="" />
                  <div className="desc">
                    <p className="name">Product name 1</p>
                    <p className="price">BDT. 1500</p>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/creation/products/1# ">
                <div className="product-card">
                  <img src={product_1} alt="" />
                  <div className="desc">
                    <p className="name">Product name 1</p>
                    <p className="price">BDT. 1500</p>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/creation/products/1# ">
                <div className="product-card">
                  <img src={product_1} alt="" />
                  <div className="desc">
                    <p className="name">Product name 1</p>
                    <p className="price">BDT. 1500</p>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/creation/products/1# ">
                <div className="product-card">
                  <img src={product_1} alt="" />
                  <div className="desc">
                    <p className="name">Product name 1</p>
                    <p className="price">BDT. 1500</p>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/creation/products/1# ">
                <div className="product-card">
                  <img src={product_1} alt="" />
                  <div className="desc">
                    <p className="name">Product name 1</p>
                    <p className="price">BDT. 1500</p>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/creation/products/1# ">
                <div className="product-card">
                  <img src={product_1} alt="" />
                  <div className="desc">
                    <p className="name">Product name 1</p>
                    <p className="price">BDT. 1500</p>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/creation/products/1# ">
                <div className="product-card">
                  <img src={product_1} alt="" />
                  <div className="desc">
                    <p className="name">Product name 1</p>
                    <p className="price">BDT. 1500</p>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/creation/products/1# ">
                <div className="product-card">
                  <img src={product_1} alt="" />
                  <div className="desc">
                    <p className="name">Product name 1</p>
                    <p className="price">BDT. 1500</p>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/creation/products/1# ">
                <div className="product-card">
                  <img src={product_1} alt="" />
                  <div className="desc">
                    <p className="name">Product name 1</p>
                    <p className="price">BDT. 1500</p>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/creation/products/1# ">
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
      </div>
    </div>
  );
}
