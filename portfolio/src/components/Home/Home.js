import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import Anjum from '../../Assets/Anjum.jpg'
import pdf from '../../Assets/anjumResume.pdf';
import Button from "react-bootstrap/Button";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ANJUM ARA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} data-aos="fade-down">
              <Tilt>
              <img style={{borderRadius: "160px"}} src={Anjum} alt="home pic" className="img-fluid" width="330px"/>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Button variant="primary" href={pdf} target="_blank">
            Resume
      </Button>
      <Home2 />
      
    </section>
  );
}

export default Home;