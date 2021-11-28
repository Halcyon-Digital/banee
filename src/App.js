import React, { Component } from "react";
import Layout from "./Components/Layout";
import "./assets/css/pages.css";
import "./assets/css/navbar.css";
import "./assets/css/footer.css";
import "./assets/css/responsive.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  AOS.init();
  return (
    <Router>
      <Layout></Layout>
    </Router>
  );
}

export default App;
