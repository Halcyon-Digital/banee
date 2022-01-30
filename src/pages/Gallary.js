import React from "react";
import Navbar from "../Components/Creative_Navbar";
import Preloader from "../Components/PreLoader";
import "../assets/css/gallary.css";
import axios from "axios";
import { useQuery } from "react-query";
import PreLoader from "../Components/PreLoader";
const proxy = process.env.REACT_APP_PROXY;
const getgallaryData = async (x) => {
  const data = await axios.get(`${proxy}/wp/v2/gallary`).then((res) => {
    return res.data;
  });
  return data;
};
export default function Gallary() {
  const { data: gallaryData, status: GallaryStatus } = useQuery(
    ["gallaryData"],
    getgallaryData
  );
  return (
    <>
      <Navbar></Navbar>
      
      <div className="gallery cf">
        {GallaryStatus !== "success" ? (
          <PreLoader></PreLoader>
        ) : (
          <>
            {gallaryData && gallaryData.length
              ? gallaryData.map((image, key) => (
                  <div>
                    <img src={image.acf.images.url} />
                  </div>
                ))
              : null}
          </>
        )}
      </div>
    </>
  );
}
