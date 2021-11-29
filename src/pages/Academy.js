import React from "react";
import Academy_Navbar from "../Components/Academy_Navbar";
import baking_course from "../assets/images/baking-course.png";
import professional_baking_course from "../assets/images/professional-baking-course.png";
import professional_baking_course_bg from "../assets/images/professional-baking-course-bg.png";
import kids_baking_course from "../assets/images/kids-baking-course.png";
import kids_baking_course_doodle from "../assets/images/kids-baking-course-doodle.png";
import kids_baking_course_bg from "../assets/images/kids-baking-course-bg.png";
import video from "../assets/video.mp4";
import { HashLink } from "react-router-hash-link";

export default function Academy() {
  return (
    <div>
      <Academy_Navbar></Academy_Navbar>
      <section id=""></section>
      <div className="academy-page">
        <div className="hero-content">
          <h3 className="title">
            <span className="sec-1">Banee's</span>{" "}
            <sec className="sec-2">Academy</sec>
          </h3>
          <div className="course professional-baking-course row">
            <div className="col-6 ">
              {/* <img
                className="professional-baking-course-image"
                src={professional_baking_course}
                alt=""
                srcset=""
              /> */}
              <video
                className="w-full professional-baking-course-image"
                autoPlay
                muted
                loop
              >
                <source src={video} type="video/mp4"></source>
                Your browser does not support HTML5 video.
              </video>
              {/* <img
                className="professional-baking-course-bg"
                src={professional_baking_course_bg}
                alt=""
                srcset=""
              /> */}
            </div>
            <div className="col-6">
              <h3>Professional Baking Course</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                veniam magnam. Molestiae qui reprehenderit mollitia eveniet
                veniam quibusdam expedita accusamus, repellendus totam possimus
                fuga cumque.
              </p>
              <p>
                <HashLink to="/academy/courses/:id">
                  <span className="btn">Learn More</span>
                </HashLink>
              </p>
            </div>
          </div>
        </div>
        <div className="baking-course">
          <div className="course  row">
            <div className="col-6">
              <h3>Professional Baking Course</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                veniam magnam. Molestiae qui reprehenderit mollitia eveniet
                veniam quibusdam expedita accusamus, repellendus totam possimus
                fuga cumque.
              </p>
              <p>
                <HashLink to="/academy/courses/:id">
                  <span className="btn">Learn More</span>
                </HashLink>
              </p>
            </div>
            <div className="col-6">
              <img src={baking_course} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="course kids-baking-course row">
          <div className="col-6">
            <img
              className="kids-image"
              src={kids_baking_course}
              alt=""
              srcset=""
            />
            <img
              className="kids-baking-course-bg"
              src={kids_baking_course_bg}
              alt=""
            />
          </div>
          <div className="col-6">
            <h3>Professional Baking Course</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              veniam magnam. Molestiae qui reprehenderit mollitia eveniet veniam
              quibusdam expedita accusamus, repellendus totam possimus fuga
              cumque.
            </p>
            <p>
              <HashLink to="/academy/courses/:id">
                <span className="btn">Learn More</span>
              </HashLink>
            </p>
            <img
              className="kids-baking-course-bdoodle"
              src={kids_baking_course_doodle}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
