import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <h2>Portfolio</h2>

            <h3>Projects</h3>
            <Row>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a
                  href="https://github.com/Dobbs96/BUCKET"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <img
                      src="assets/images/portfolio/party-buddy.jpg"
                      alt="Party Buddy"
                    />
                    <figcaption>Bucket</figcaption>
                  </figure>
                </a>
              </Col>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a
                  href="https://github.com/csalhab/bander"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <img
                      src="assets/images/portfolio/quiz-journey.jpg"
                      alt="Quiz Journey"
                    />
                    <figcaption>Bander</figcaption>
                  </figure>
                </a>
              </Col>
            </Row>

            <h3>Assignments</h3>
            <Row>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a
                  href="https://github.com/sblanchard10/Fitness-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <figcaption>Fitness Tracker</figcaption>
                  </figure>
                </a>
              </Col>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a
                  href="https://github.com/sblanchard10/Budget-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <figcaption>Weather Dashboard</figcaption>
                  </figure>
                </a>
              </Col>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a
                  href="https://github.com/sblanchard10/Team-Profile-Generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <figcaption>Team Profile Generator</figcaption>
                  </figure>
                </a>
              </Col>
              <Col settings="col-sm-6 col-md-4 col-lg-3">
                <a
                  href="https://github.com/sblanchard10/Coding-Quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <figcaption>Coding Quiz</figcaption>
                  </figure>
                </a>
              </Col>
            </Row>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
