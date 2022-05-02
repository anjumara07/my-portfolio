import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiVercel,SiHeroku } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize:"20px", marginTop: "10px" }}>VS CODE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize:"20px", marginTop: "10px" }}>POSTMAN</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{fontSize:"20px", marginTop: "10px" }}>VERCEL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p style={{fontSize:"20px", marginTop: "10px" }}>HEROKU</p>
      </Col>
    </Row>
  );
}

export default Toolstack;