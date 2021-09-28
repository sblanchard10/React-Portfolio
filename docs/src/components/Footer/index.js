import React from "react";
import { Col, Row, Container } from "../Grid";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col settings="text-center">
            <span class="copyright">
              Copyright &copy; {new Date().getFullYear()} Stephanie Blanchard
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
