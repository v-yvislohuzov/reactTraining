import React from "react";
import "../styles/Footer.css";

class FooterApp extends React.Component {
  render() {
    return (
      <div color="blue" className="footer font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
          <div fluid className="copyright">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.anyUrl.com"> React training </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterApp;
