import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ctf from "../../Assets/Projects/1.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={ctf}
              isBlog={false}
              title="Capture the Flag"
              description="A Capture the Flag (CTF) event is a cybersecurity competition that challenges participants to solve a variety of puzzles, tasks, and challenges to find flags hidden within systems or applications. These flags are typically strings or codes that prove the successful completion of a challenge developed for Threads'24 event."
              ghLink="https://github.com/INFANTCALVIN/Capture-the-flag"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PG Accods"
              description="This website will provide a comprehensive database of available PGsWith features such as detailed property listings, filtered search options, reviews and ratings and our website aims to streamline the process of finding suitable PG accommodations for students, working professionals, and others in need of temporary housing solutions."
              ghLink="https://github.com/INFANTCALVIN/PG-Accods"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
