import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { HashLink } from "react-router-hash-link";
import Navbar from "../Components/Navbar";
import "../assets/css/AllCourse.css";

const AllCourse = () => {
  const [courseDetails, setCourseDetails] = useState([]);
  const history = useHistory();

  const handleButton = (name) => {
    const courseName = name.trim().toLowerCase();
    const path = courseName.replaceAll(" ", "-");
    history.push(`/courses/short/${path}`);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PROXY}/acf/v3/short_course`)
      .then((res) => res.json())
      .then((data) => setCourseDetails(data));
  }, []);

  if (courseDetails.length === 0) {
    return "Loading...";
  }

  return (
    <div>
      <Navbar />
      <section>
        <div className="course-container">
          {courseDetails.map((course) => (
            <div className="professional-course width">
              <div>
                <h3>{course.acf.course_name}</h3>
                <p className="description">
                  {course.acf.course_description.slice(0, 190)}
                </p>
                <p className="course-fee">
                  Course Fee: {course.acf.course_fee}
                </p>
                <p>
                  <button
                    className="btn"
                    onClick={() => handleButton(course.acf.course_name)}
                  >
                    Learn More
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllCourse;
