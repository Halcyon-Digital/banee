import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Creation from "../pages/Creation";
import Custom_order from "../pages/Custom_order";
import Academy from "../pages/Academy";
import Product_details from "../pages/Product_details";
import Course_details from "../pages/Course_details";
import Gallary from "../pages/Gallary";
import Contact from "../Components/Contact";
import AllCourse from "../pages/AllCourse";
export default function Section() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/creation" exact component={Creation}></Route>
      <Route path="/custom_order" exact component={Custom_order}></Route>
      <Route path="/academy" exact component={Academy}></Route>
      <Route path="/courses" exact component={AllCourse}></Route>
      <Route
        path="/creation/products/:id"
        exact
        component={Product_details}
      ></Route>
      <Route
        path="/academy/courses/:slug"
        exact
        component={Course_details}
      ></Route>
      <Route path="/gallary" exact component={Gallary}></Route>
      <Route path="/contact" exact component={Contact}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
}
