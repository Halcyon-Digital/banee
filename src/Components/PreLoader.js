import React from "react";
import "../assets/css/Preloader.css";

export default function PreLoader() {
  return (
    <div className="wrapper">
      <span className="square square-7"></span>
      <span className="square square-6"></span>
      <span className="square square-5"></span>
      <span className="square square-4"></span>
      <span className="square square-3"></span>
      <span className="square square-2"></span>
      <span className="square square-1"></span>
    </div>
  );
}
