import React from "react";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useQuery } from "react-query";
const proxy = process.env.REACT_APP_PROXY;
const ck = process.env.REACT_APP_CK;
const cs = process.env.REACT_APP_CS;
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
      return res.data;
    });
  return data;
};
export default function CourseCard(props) {
  const { data: CourseDetails, status: CourseStatus } = useQuery(
    ["CourseDetails", props.slug],
    getCourseDetails
  );
  return (
    <>
      {CourseDetails && CourseDetails.length ? (
        <HashLink to={`/academy/courses/${props.slug}#`}>
          <div className="product-card course-card">
            {/* <img src={CourseDetails[0].acf.banner.url} alt="" /> */}
            <p className="name">{CourseDetails[0].title.rendered} </p>
            <hr></hr>
            <p className="price">BDT. {CourseDetails[0].acf.course_fee}/-</p>
            <p className="btn">Enroll Now</p>
          </div>
        </HashLink>
      ) : null}
    </>
  );
}
