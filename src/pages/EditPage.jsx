import React, { Component } from "react";
import AppContainer from "../components/AppContainer";
import EditCourse from "../components/EditCourse";

export default class LoginPage extends Component {
  render() {
    return (
      <AppContainer>
        <EditCourse />
      </AppContainer>
    );
  }
}
