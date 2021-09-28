import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <h2>Contact</h2>
            <p>
              GitHub Profile
              <br />
              <a
                href="https://github.com/sblanchard10"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/sblanchard10
              </a>
            </p>
            <p>
              LinkedIn Profile
              <br />
              <a
                href="https://www.linkedin.com/in/stephanie-blanchard-583963192/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/stephanie-blanchard-583963192/
              </a>
            </p>
            <hr />
            <p>
              <Link to="assets/Resume" target="_blank">
                View my resume
              </Link>
            </p>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
