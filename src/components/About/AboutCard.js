import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Simranjot Kaur </span>
            from <span className="purple"> Punjab, India.</span>
            <br /> I am a 1st year student pursuing Master's in Computer Applications at LPU, Punjab. I have done BCA from punjabi university, patiala. 
            <br />
            Additionally, I am currently looking for internships in Software development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Luck opens the door, but hard work strides through it with purpose and determination.!"{" "}
          </p>
          <footer className="blockquote-footer">Simranjot</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

