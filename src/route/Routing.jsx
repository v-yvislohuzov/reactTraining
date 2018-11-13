import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CoursesPage from "../pages/CoursesPage";
import EditPage from "../pages/EditPage";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/login" component={LoginPage} />
        <Route path="/edit" component={EditPage} />
        <Route path="/course" component={CoursesPage} />
      </div>
    );
  }
}

export default AppRouter;
