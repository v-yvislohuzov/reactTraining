import React, { Component } from "react";
import { AppContainer } from "../components/core/app/AppContainer";
import EditCourse from "../components/edit/EditCourse";

export default class LoginPage extends Component {
  render() {
    return (
      <AppContainer>
        <EditCourse />
      </AppContainer>
    );
  }
}
