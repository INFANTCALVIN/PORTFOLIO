import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ctf from "../../Assets/Projects/1.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import aiskincare from "../../Assets/Projects/AI.png";
import priyaport from "../../Assets/Projects/port.png";
import door from "../../Assets/Projects/doorlock.png";
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
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiskincare}
              isBlog={false}
              title="AI Skincare"
              description="Skincare AI is your virtual skincare consultant, providing tailored advice and solutions for all your skincare needs. It analyzes your skin type, concerns, and goals to recommend the best products and routines.From cleansing to moisturizing, sun protection to exfoliation, it guides you through each step of a comprehensive skincare regimen."
              ghLink="https://github.com/INFANTCALVIN/AI-SKINCARE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={priyaport}
              isBlog={false}
              title="Portfolio-Freelance"
              description="Priya's Portfolio Website — a fully customized and visually engaging personal portfolio site, crafted to showcase skills, experiences, and creativity in a dynamic way!💼✨This project challenged me to create a responsive, user-friendly interface that highlights personal branding with seamless design and interactivity."
              ghLink="https://github.com/FreelancerNics/PORTFOLIO-PRIYA.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={door}
              isBlog={false}
              title="Smart Door Lock-IOT"
              description="Developed a 🔐 Smart Lock System using Blynk Console that automatically locks classrooms after 6 PM if empty and unlocks at 6 AM. Includes exception handling for holidays/functions and real-time control via IoT dashboard. Ensures security with automation and presence detection. ⚙️📱"
              ghLink="https://github.com/INFANTCALVIN"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
