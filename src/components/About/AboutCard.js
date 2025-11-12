import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Simranjot Kaur </span>
            from <span className="purple"> Punjab, India.</span>
            <br /> I am a 1st year student pursuing a Master's in Computer Applications (AI & ML specialization) at LPU, Punjab.
            <br />
            I have completed my BCA from Punjabi University, Patiala (2022–2025).
            <br />
            Additionally, I am currently looking for internships in Software Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* Education Section */}
          <h5 className="purple" style={{ marginTop: "25px" }}>
            Education
          </h5>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <b>Master of Computer Applications (AI & ML)</b> — Lovely Professional University, Punjab (2025–Present)
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Bachelor of Computer Applications (BCA)</b> — Punjabi University, Patiala (2022–2025)
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Senior Secondary (12th)</b> — Punjab Education Board School (2021)
            </li>
          </ul>

          {/* Document buttons - aligned and styled to match the component */}
          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button
              variant="outline-primary"
              href="https://drive.google.com/file/d/1q0SsJwchlANbA4PpvE6_Ekk4KwScFX7O/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Senior Secondary document"
              style={{ maxWidth: 260 }}
            >
              View Senior Secondary Document
            </Button>

            <Button
              variant="outline-primary"
              href="https://drive.google.com/file/d/1cfEBfvuMjGP1toaP8x6IBturE1DuvQcs/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View BCA document"
              style={{ maxWidth: 260 }}
            >
              View BCA Document
            </Button>
          </div>

          <p style={{ color: "rgb(155 126 172)", marginTop: 18 }}>
            "Luck opens the door, but hard work strides through it with purpose and determination!"
          </p>
          <footer className="blockquote-footer">Simranjot</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
