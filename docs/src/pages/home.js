import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <h2>About Me</h2>
            <img
              src="assets/images/DAD80BC5-1537-405A-B689-20787B24B377_1_105_c.jpeg"
              alt="My Portrait"
              width="180"
              class="float-sm-left"
            />
            <p>
              My name is Stephanie Blanchard. I'm a Laboratory Technologist and
              an aspiring full stack web developer.
            </p>

            <p>
              I have always been intrigued by computers and web design and
              decided to do a full stack web development bootcamp at Columbia
              University.
            </p>
            <p>
              I enjoy traveling, reading, and going on random adventures around
              New York City.
            </p>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
