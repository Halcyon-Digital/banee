import React, { useEffect, useState } from "react";
import course_details_bg from "../assets/images/course-details-bg.webp";
// import Navbar from "../Components/Academy_Navbar";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import sendEmail from "../Components/Send_email";
import Navbar from "../Components/Navbar";
const proxy = process.env.REACT_APP_PROXY;
const ck = process.env.REACT_APP_CK;
const cs = process.env.REACT_APP_CS;
const username = process.env.REACT_APP_API_USERNAME;
const password = process.env.REACT_APP_API_PASSWORD;
const getCourseDetails = async (x) => {
  var slug = x.queryKey[1];
  const data = await axios
    .get(`${proxy}/wp/v2/courses?slug=${slug}`, {
      auth: {
        username: ck,
        password: cs,
      },
    })
    .then((res) => {
      return res.data[0];
    });
  return data;
};
export default function Course_details(props) {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [batchName, setBatchName] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentGmail, setStudentGmail] = useState("");
  const [studentPhone, setstudentPhone] = useState("");
  const [studentGender, setStudentGender] = useState("");
  const [token, setToken] = useState("");
  const queryClient = new useQueryClient();
  const { data: CourseDetails, status: CourseStatus } = useQuery(
    ["CourseDetails", props.match.params.slug],
    getCourseDetails,
    {
      initialData: () => {
        if (typeof queryClient.getQueryData("AllCourse") !== "undefined") {
          return queryClient
            .getQueryData("AllCourse")
            .find((d) => d.slug == props.match.params.slug);
        } else {
          return;
        }
      },
    }
  );

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

  const endDate = CourseDetails?.acf.end_date;
  if (endDate) {
    const lastDate = endDate.split("-");
    const [date, month, year] = lastDate;
    const lastedDate = new Date(`${month}-${date}-${year}`).getTime();
    let presentDate = new Date().getTime();
    var isBig = lastedDate >= presentDate;
  }
  console.log(isBig);

  async function handleRegistrationForm() {
    var confirm = window.confirm("Are you sure to continue?");
    if (confirm) {
      await axios
        .post(
          `${proxy}/wp/v2/student_registration`,
          {
            title: studentName,
            status: "pending",
            fields: {
              course_name: CourseDetails.title.rendered,
              student_name: studentName,
              student_age: studentAge,
              batch_name: batchName,
              student_address: studentAddress,
              student_gmail: studentGmail,
              student_phone: studentPhone,
              student_gender: studentGender,
              application_date: new Date().toDateString(),
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
            // send email to student
            sendEmail(
              process.env.REACT_APP_SENDER_EMAIL,
              res.data.acf.student_gmail,
              "Registration Succesful",
              `
            Thank you ${res.data.acf.student_name}. Your registration for Course: ${res.data.acf.course_name} Batch: ${res.data.acf.batch_name} is succesful. We will contact you soon.`
            );
            // Send email to admin
            sendEmail(
              `${res.data.acf.student_gmail}`,
              process.env.REACT_APP_ADMIN_EMAIL,
              "New Registration Banees-Academy",
              `Name : ${res.data.acf.student_name} <br>
              Age : ${res.data.acf.student_age} <br>
              Gender : ${res.data.acf.student_gender} <br>
              Email : ${res.data.acf.student_gmail} <br>
              Address : ${res.data.acf.student_address} <br>
              Phone : ${res.data.acf.student_phone} <br>
              Application Date : ${res.data.acf.application_date}<br><br><br>
              Message: View registration Request in https://admin.banees.com/wp-admin
              `
            );
            window.scroll(0, 0);
            document.getElementById("form-overlay").style.width = "80%";
            document.getElementById(
              "form-body"
            ).innerHTML = `<div className="success-message">
      <h3 className="title">
        Thank you ${res.data.acf.student_name} for your registration. We will contact you soon.
      </h3>
    </div>`;
          }
        });
    }
  }
  if (CourseStatus !== "success") {
    return "Loading...";
  }
  return (
    <>
      <Navbar></Navbar>
      <section id=""></section>
      {true ? (
        <div className="course-details">
          <div className="hero-content">
            <img src={CourseDetails?.acf.banner.url} alt="" srcSet="" />
          </div>
          <div className="container">
            <h3 className="title">
              <span className="sec-1">Course </span>
              <span className="sec-2">Details</span>
            </h3>
            <div className="row">
              <div className="col-6 mob-col-10">
                <h3 className="course-title">{CourseDetails.title.rendered}</h3>
                <p>Instructor Name: {CourseDetails.acf.instructor}</p>
                <p>Duration: {CourseDetails.acf.course_duration} Days</p>
                <div className="objective">
                  <h3>Available Batches</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: CourseDetails.acf.batches.replaceAll(
                        ",",
                        "<br/>"
                      ),
                    }}
                  ></p>
                </div>
                <div className="objective">
                  <h3>What you will learn?</h3>
                  <p
                  /* dangerouslySetInnerHTML={{
                      __html: CourseDetails.acf.learning_objectives.replaceAll(
                        "\r\n",
                        "<br/>"
                      ),
                    }} */
                  >
                    {CourseDetails.acf.learning_objectives}
                  </p>
                </div>
                <div className="description">
                  <h3>Course Description</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: CourseDetails.acf.course_description.replaceAll(
                        "\r\n",
                        "<br/>"
                      ),
                    }}
                  ></p>
                </div>
              </div>
              <div className="col-4 mob-col-10">
                <div className="pricing">
                  {isBig ? (
                    <div className="desc">
                      <p>Course fee:</p>
                      <p>
                        <b>BDT. {CourseDetails.acf.course_fee}/-</b>
                      </p>
                      <div className="py-2">
                        <p>Course Starting Date</p>
                        <p>
                          <b>{CourseDetails.acf.start_date}</b>
                        </p>
                      </div>

                      {CourseDetails.acf.end_date ? (
                        <>
                          <p>Course Ending Date</p>
                          <p>
                            <b>{CourseDetails.acf.end_date}</b>
                          </p>
                        </>
                      ) : (
                        <p>
                          <b>Admission Going On...</b>
                        </p>
                      )}

                      <p
                        className="btn"
                        onClick={() => {
                          window.scrollTo(0, 0);
                          document.getElementById(
                            "form-overlay"
                          ).style.display = "block";
                        }}
                      >
                        Register
                      </p>
                    </div>
                  ) : (
                    <p>
                      <b>
                        Course Availability End in {CourseDetails.acf.end_date}
                      </b>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="registration-form" id="form-overlay">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRegistrationForm();
                }}
              >
                <span
                  className="cross-btn"
                  onClick={() => {
                    document.getElementById("form-overlay").style.display =
                      "none";
                  }}
                >
                  X
                </span>
                <h3 className="title">Registration Form</h3>

                <div className="form-body" id="form-body">
                  <label htmlFor="course_name">Course Name</label>
                  <input
                    readOnly
                    type="text"
                    name="course_name"
                    id="course_name"
                    defaultValue={CourseDetails.title.rendered}
                  />
                  <p>Select Batch</p>
                  {CourseDetails.acf.batches.split(",").map((x, key) => (
                    <>
                      <input
                        required
                        type="radio"
                        id={x}
                        name="batch"
                        value={x}
                        onChange={() => {
                          setBatchName(x);
                        }}
                      />
                      <label for={x}>{x}</label>
                    </>
                  ))}

                  <br />
                  <label htmlFor="student_name">Student Name</label>
                  <input
                    required
                    type="text"
                    name="student_name"
                    id="student_name"
                    onChange={(e) => {
                      setStudentName(e.target.value);
                    }}
                  />
                  <label htmlFor="student_age">Age</label>
                  <input
                    required
                    type="text"
                    name="student_age"
                    id="student_age"
                    onChange={(e) => {
                      setStudentAge(e.target.value);
                    }}
                  />
                  <p>Select Gender</p>
                  <input
                    required
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={() => {
                      setStudentGender("Male");
                    }}
                  />
                  <label for="male">Male</label>
                  <br />
                  <input
                    required
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={() => {
                      setStudentGender("Female");
                    }}
                  />
                  <label for="female">Female</label>
                  <br />
                  <label for="student_email">Present Address</label>
                  <input
                    required
                    type="text"
                    name="student_address"
                    id="student_address"
                    onChange={(e) => {
                      setStudentAddress(e.target.value);
                    }}
                  />
                  <label for="student_email">Email</label>
                  <input
                    required
                    type="text"
                    name="student_email"
                    id="student_email"
                    onChange={(e) => {
                      setStudentGmail(e.target.value);
                    }}
                  />
                  <label for="student_phone">Contact Number</label>
                  <input
                    required
                    type="text"
                    name="student_phone"
                    id="student_phone"
                    onChange={(e) => {
                      setstudentPhone(e.target.value);
                    }}
                  />
                  <button className="btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <img className="bg" src={course_details_bg} alt="" srcSet="" />
          {/* {AllCourse && AllCourse.length ? (
            <div className="related-products">
              <h3 className="title">
                <span className="sec-1">Related</span> &nbsp;
                <span className="sec-2">Courses</span>
              </h3>
              <div className="row">
                {AllCourse.map((course, key) => (
                  <CourseCard slug={course.slug}></CourseCard>
                ))}
              </div>
            </div>
          ) : (
            ""
          )} */}
        </div>
      ) : null}
    </>
  );
}
