import React from "react";
import { HashLink } from "react-router-hash-link";
import product_1 from "../assets/images/cake-1.png";
import header from "../assets/images/course-header.png";
import course_details_bg from "../assets/images/course-details-bg.png";
import Navbar from "../Components/Academy_Navbar";
export default function Course_details() {
  return (
    <>
      <Navbar></Navbar>
      <section id=""></section>
      <div className="course-details">
        <div className="hero-content">
          <img src={header} alt="" srcset="" />
        </div>
        <div className="container">
          <h3 className="title">
            <span className="sec-1">Course </span>
            <span className="sec-2">Details</span>
          </h3>
          <div className="row">
            <div className="col-6 mob-col-10">
              <h3 className="course-title">Professional Baking Course</h3>
              <p>Instructor Name:</p>
              <p>Duration:</p>
              <div className="objective">
                <h3>What you will learn?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quibusdam soluta nihil alias veniam laboriosam
                  asperiores vero natus, cum sapiente neque praesentium at
                  ratione eveniet?
                </p>
              </div>
              <div className="description">
                <h3>Course Description</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  ipsam odio sed doloribus. Velit cupiditate praesentium eum
                  aperiam molestias fugit ullam vitae aliquam distinctio
                  perferendis. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sapiente laboriosam inventore, velit quos
                  dolores nemo odio commodi dicta molestiae doloribus dolorum
                  saepe corporis quas harum quidem repudiandae labore. Eaque
                  suscipit, accusamus ipsam tenetur voluptas nihil earum
                  eveniet, qui quos quasi a aperiam minus dolorem. Quis nulla
                  porro quas minus deserunt.
                </p>
              </div>
            </div>
            <div className="col-4 mob-col-10">
              <div className="pricing">
                <div className="desc">
                  <p>Course fee:</p>
                  <p>
                    <b>BDT. 50000/-</b>
                  </p>
                  <p>Start Date</p>
                  <p>
                    <b>00-00-0000</b>
                  </p>
                  <p>End Date</p>
                  <p>
                    <b>00-00-0000</b>
                  </p>
                  <p className="btn">Register</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="bg" src={course_details_bg} alt="" srcset="" />
        <div className="related-products">
          <h3 className="title">
            <span className="sec-1">Related</span> &nbsp;
            <span className="sec-2">Courses</span>
          </h3>
          {/* <div className="row">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
