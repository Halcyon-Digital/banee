import React from "react";
import { Route, Redirect, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Creation from "../pages/Creation";
import Academy from "../pages/Academy";
import Product_details from "../pages/Product_details";
import Course_details from "../pages/Course_details";
import Gallary from "../pages/Gallary";
export default function Section() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/creation" exact component={Creation}></Route>
      <Route path="/academy" exact component={Academy}></Route>
      <Route
        path="/creation/products/:id"
        exact
        component={Product_details}
      ></Route>
      <Route
        path="/academy/courses/:id"
        exact
        component={Course_details}
      ></Route>
      <Route
        path="/gallary"
        exact
        component={Gallary}
      ></Route>
     <Redirect to='/'></Redirect>
    </Switch>
  );
}
