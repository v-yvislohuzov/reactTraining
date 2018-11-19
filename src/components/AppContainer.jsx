import React, { Component } from "react";
import HeaderApp from "./Header";
import FooterApp from "./Footer";
import "../styles/AppContainer.css";

export class AppContainer extends Component {
  render() {
    return (
      <div className="content">
        <HeaderApp />
        <div className="container">{this.props.children}</div>
        <FooterApp />
      </div>
    );
  }
}
