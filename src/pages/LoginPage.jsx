import React, { Component } from "react";
import { AppContainer } from "../components/core/app/AppContainer";
import LoginForm from "../components/login/LoginForm";

export default class LoginPage extends Component {
  render() {
    return (
      <AppContainer>
        <LoginForm />
      </AppContainer>
    );
  }
}
