import React from "react";
import Layout from "./Components/Layout";
import "./assets/css/pages.css";
import "./assets/css/navbar.css";
import "./assets/css/footer.css";
import "./assets/css/responsive.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout></Layout>
    </Router>
  );
}

export default App;
