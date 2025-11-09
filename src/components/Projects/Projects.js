import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import coffee from "../../Assets/Projects/coffee.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quiz-App"
              description="The React Quiz Web App is an interactive and time-bound quiz application designed to test users' knowledge. This web application offers an engaging and challenging experience, presenting users with a series of questions within a specified time limit. After completing the quiz, users receive their performance."
              ghLink="https://github.com/jotsimran1103-boop/quiz-app-by-simran"
              demoLink="#"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
