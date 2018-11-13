import React from "react";
import { Container, Footer } from "mdbreact";
import "../styles/Footer.css";

class FooterApp extends React.Component {
  render() {
    return (
      <Footer color="blue" className="footer font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
          <Container fluid className="copyright">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.anyUrl.com"> React training </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterApp;