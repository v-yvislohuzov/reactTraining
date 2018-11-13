import React, { Component, Fragment } from "react";
import HeaderApp from "./Header";
import FooterApp from "./Footer";
import "../styles/AppContainer.css";

export default class AppContainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="content">
          <HeaderApp />
          <div className="container">{this.props.children}</div>
          <FooterApp />
        </div>
      </Fragment>
    );
  }
}
