import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">INFANT CALVIN P </span>
            from <span className="purple"> Salem, TamilNadu.</span>
            <br />
            I am currently pursuing my undergraduate degree in Computer Science Engineering.
            <br />
            I'm  a passionate web developer eager to make my mark in the digital world.
            Ever since I tinkered with my first line of code, I've been hooked on the magic of web development.
            <br /> 
            From crafting clean, elegant designs to bringing them to life with the power of code, I find joy in every aspect of the development process.
            While I may be new to the industry, my enthusiasm is matched only by my dedication to learning and growing. 
            <br />
            I thrive in collaborative environments where I can leverage my skills while absorbing knowledge from seasoned professionals.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovate,Create,Code !"{" "}
          </p>
          <footer className="blockquote-footer" style={{ paddingLeft: "100px" }}>Calvin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
