import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";


import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
function Home2() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <Container fluid className="home-about-section" id="about">
      <Container fluid>
        <Row>
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT ME
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Anjum Ara </span>
            from <span className="purple"> Prayagraj, Uttarpradesh, India.</span>
            {/* <br /> I have completed my graduation in Computer Science Engineering.<br/> */}
            <br />
            <br />
            A highly dedicated and passionate full-stack web developer with excellent administrative and communication skills and the ability to write efficient code.
            Self motivated, quick-learner and curious with proficiency in MERN stack. Adaptive to new technology and environment.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={4}
            className="myAvtar"
            data-aos="fade-down"
            style={{ marginTop: "-32px" }}
          >
            <Tilt>
              <img
                src="https://www.transparentpng.com/thumb/technology/technology-simple-17.png"
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12}>
            <About />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Projects />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1>FIND ME ON</h1>
            <div style={{display: 'grid', marginLeft: 'auto', marginRight:'auto', width:'300px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
              <a href="https://github.com/anjumara07" target="_blank" style={{textDecoration: 'none', color:'white'}}> <AiFillGithub style={{height: '40px', width: '40px'}} /> </a>
              </div>
              <div></div>
              <div>
                <a href="https://www.linkedin.com/in/anjum-ara-93b192208/" target="_blank" style={{textDecoration: 'none', color:'white'}}><FaLinkedinIn style={{height: '40px', width: '40px'}} /></a>
              </div>
            
          </div>
          <br/>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            
            
            <h3>
              Contact No:
              <p
                href="tel:+9140049666"
                style={{
                  color: "#f0195a",
                }}
              >
                +9140049666
              </p>
            </h3>
            
            <h3>
              Email:
              <p
                href="tel:+9140049666"
                style={{
                  color: "#f0195a",
                }}
              >
                anjumara0711@gmail.com
              </p>
            </h3>
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}
export default Home2;