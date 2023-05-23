import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiHeroku,
  SiVercel,
  SiSwagger,
  SiAmazons3,
  SiWebrtc,
  SiJquery,
  SiSocketdotio
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSocketdotio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebrtc />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
      </Col>
    </Row>
  );
}

export default Toolstack;
