import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./route/Routing";
import { BrowserRouter as Router } from "react-router-dom";
export * from "./components/core/header/Header";
export * from "./components/core/footer/Footer";
export * from "./components/core/app/AppContainer";
export * from "./components/cources/Course";
export * from "./components/cources/Navigation";
export * from "./components/edit/EditCourse";
export * from "./components/login/LoginForm";

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById("root")
);
