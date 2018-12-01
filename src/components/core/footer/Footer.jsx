import React from "react";
import "./Footer.css";

export class FooterApp extends React.Component {
  render() {
    return (
      <div color="blue" className="footer font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.anyUrl.com"> React training </a>
          </div>
        </div>
      </div>
    );
  }
}
