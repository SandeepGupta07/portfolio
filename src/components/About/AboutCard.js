import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandeep Gupta </span>
            from <span className="purple"> Jalandhar, India.</span>
            <br />I'm a, passionate self-taught full stack web developer and a freelance software engineer from india.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing Internet
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace challenges fearlessly, conquer them confidently, and <br/>
            prove that nothing is too difficult to overcome !!"{" "}
          </p>
          <footer className="blockquote-footer">Sandeep Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
