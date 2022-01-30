import React from "react";
import Academy_Navbar from "../Components/Academy_Navbar";
import baking_course from "../assets/images/baking-course.webp";
import kids_baking_course from "../assets/images/kids-baking-course.webp";
import kids_baking_course_doodle from "../assets/images/kids-baking-course-doodle.webp";
import kids_baking_course_bg from "../assets/images/kids-baking-course-bg.webp";
import cookery_crackary_course from "../assets/images/cookery-crackary-course.webp";
import govt_baking_course from "../assets/images/govt-baking-course.webp";
import govt_baking_course_bg from "../assets/images/govt-baking-course-bg.webp";
import video from "../assets/video.mp4";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useQuery } from "react-query";
const proxy = process.env.REACT_APP_PROXY;
const ck = process.env.REACT_APP_CK;
const cs = process.env.REACT_APP_CS;

const getAllCourse = async (x) => {
  const data = await axios
    .get(`${proxy}/wp/v2/courses`, {
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
export default function Academy() {
  const { data: AllCourse, status: AllCourseStatus } = useQuery(
    ["AllCourse"],
    getAllCourse
  );
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
              <video
                className="w-full professional-baking-course-image"
                autoPlay
                muted
                loop
              >
                <source src={video} type="video/mp4"></source>
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="col-6 mob-col-10">
              <h3>Professional Baking course</h3>
              <p className="description">
                Our professional baking course is a Basic to advance level
                course that can help a student to have a full hands on
                experience on A to Z of Baking and become a professional bakery
                chef within 25 days. This course include contents starting from
                bread, biscuit, desserts, pastry items, cakes to advance level
                sugar works. Furthermore, after the course students can get a
                chance to do internship from renowned hotels of Bangladesh. So
                people who are planning to work in the bakery industry
                professionally then this is the best choice for them. <br></br>
                Professional Baking course has 2 different batches. One is
                weekend batch that only held on Friday and Saturday and the
                other one is the weekday batch that held at least 3-4 days in a
                week.
              </p>
              <p>
                <HashLink to="/academy/courses/professional-baking-course#">
                  <span className="btn">Learn More</span>
                </HashLink>
              </p>
            </div>
          </div>
        </div>
        <div className="baking-course">
          <div className="course  row">
            <div className="col-6">
              <h3>Cookery and Cakery Course</h3>
              <p className="description">
                This is an ideal course for people who are looking for basic
                cooking and baking demonstration course in a short time.{" "}
                <br></br>
                From cookery part, you will learn Thai, Chinese, Continental,
                Bangladeshi and Indian cuisine. From Cakery part you will learn
                different types of cakes only.
              </p>
              <p>
                <HashLink to="/academy/courses/cookery-and-cakery-course#">
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
          <div className="col-6 mob-col-10">
            <h3>Kids special cooking and baking diploma program</h3>
            <p className="description">
              Now-a-days kids are mostly getting attracted to technology which
              sometimes hampers their creativity and mental development. Cooking
              and baking are a very interesting activity for a kid because it
              helps the kid with mental development, explore his/her creativity
              and gets them away from technology for sometimes. Not only as a
              hobby, can some kid take this as their profession in future too.
              We are the first institute in Bangladesh to provide a cooking and
              baking 2 years diploma program where they will be able to
              experience the baking and culinary field professionally and become
              a junior master chef. <br></br>Kids aging 6-15 can join this
              course. This is a one day course in every week for 2 years and
              they will learn everything about cooking and baking in total of 4
              semesters. After this course they will be fully prepared to
              participate in any national or international cooking and baking
              program.
            </p>
            <p>
              <HashLink to="/academy/courses/kids-special-cooking-and-baking-diploma-program#">
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
        <div className="baking-course cookery-crackary-course">
          <div className="course  row">
            <div className="col-6">
              <h3>Short Courses</h3>
              <p className="description">
                We offer different types of short courses.
              </p>
              <p>
                <HashLink to="/academy/courses/short-courses#">
                  <span className="btn">Learn More</span>
                </HashLink>
              </p>
            </div>
            <div className="col-6">
              <img src={cookery_crackary_course} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="course kids-baking-course govt-baking-course row">
          <div className="col-6">
            <img
              className="kids-image"
              src={govt_baking_course}
              alt=""
              srcset=""
            />
            <img
              className="kids-baking-course-bg"
              src={govt_baking_course_bg}
              alt=""
            />
          </div>
          <div className="col-6">
            <h3>Governmental Courses</h3>
            <p className="description"></p>
            <p>
              <HashLink to="/academy/courses/governmental-courses#">
                <span className="btn">Learn More</span>
              </HashLink>
            </p>
            {/* <img
              className="kids-baking-course-bdoodle"
              src={kids_baking_course_doodle}
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
