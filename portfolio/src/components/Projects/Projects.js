import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Zara from "../../Assets/Projects/Zara.png";
import Practo from "../../Assets/Projects/Practo.png"
import youtube from "../../Assets/Projects/youtube.png"
import weather from "../../Assets/Projects/weather.png"
import tictactoe from "../../Assets/Projects/TicTacToe.png"
import PetHouse from "../../Assets/Projects/PetHouse.png"

import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={PetHouse}
              isBlog={false}
              title="Boarding house for your pets"
              description="In this website you can find boarding house for your pets. All details of the boarding house are mentioned here. Admin can add , update and delete the information. Login , Sorting and filter functionalities are also there."
              tech="React |  Redux |  NodeJs  |  ExpressJs  |  MongoDB  |  CSS"
              link="https://github.com/anjumara07/bos-first-site"
              linklive="https://bos-first-site-gold.vercel.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Zara}
              isBlog={false}
              title="Zara Clone "
              description="This project is a clone of ZARA.com which is well known online shopping store. The company specializes in fast fashion, and products include clothing, accessories, shoes, beauty products and many more things."
              tech="NodeJs  |  ExpressJs  |  HTML |  CSS |  JavaScript  |  MongoDB"
              link="https://github.com/divyansh050/ZARA-CLONE"
              linkmedium="https://h1t3ndr4.medium.com/cloning-of-zara-website-119d7d053880"
              linklive="https://zara-replica.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Practo}
              isBlog={false}
              title="Practo Clone "
              description="This project is a clone of Practo.com which is health realated website where you can consult with top Doctors for any health concern and also can buy medicines from there ."
              tech="HTML  |  CSS  |  JavaScript"
              link="https://github.com/anjumara07/Practo-Clone-Project"
              linkmedium="https://medium.com/@anshukelodiya/our-project-team-practo-b6109bd14863"
              linklive="https://practo-clone-project.netlify.app/"
            />
          </Col>

           <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="You Tube Clone"
              description="A simple mini you tube app."
              tech="HTML  |  JavaScript  |  CSS"
              link="https://github.com/anjumara07/mini-youtube"
              linkmedium=""
              linklive="https://mini-you-tube-app.netlify.app/"
            />
          </Col>

         <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A simple weather application for users which gives you next 7 days weather information."
              tech="HTML  |  CSS  | JavaScript"
              link="https://github.com/anjumara07/weather-app"
              linkmedium=""
              linklive="https://my-weather-app-proj.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic tac Toe Game"
              description="A simple tic-tac-toe game where users can play the game"
              tech="ReactJs  |  CSS"
              link="https://github.com/anjumara07/Tic-Tac-Toe"
              linkmedium="#"
              linklive="https://tic-tac-toe-anjum.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;