import React, { Component } from "react";
import { AppContainer } from "../components/AppContainer";
import LoginForm from "../components/LoginForm";

export default class LoginPage extends Component {
  render() {
    return (
      <AppContainer>
        <LoginForm />
      </AppContainer>
    );
  }
}
