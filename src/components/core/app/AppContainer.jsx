import React, { Component } from "react";
import { HeaderApp } from "../header";
import { FooterApp } from "../footer";
import "./AppContainer.css";

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
