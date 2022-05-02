import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillGithub } from "react-icons/ai";
import {SiHashnode} from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";



import "./proj.css";
import { Col } from "react-bootstrap";
function ProjectCards(props) {
  
  return (
    <Card className="project-card-view">
      <br />
      <Card.Title><a href={props.linklive} rel="noreferrer" target="_blank" style={{color:"whitesmoke"}}>{props.title}</a></Card.Title>
      <Card.Img
        src={props.imgPath}
        alt="card-img"
        style={{ height: "250px" }}
      />
      
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <br/>
        <Card.Text style={{ textAlign: "center" }}>
          <span>Tech Stack: </span> <br />
          <span className="purple">{props.tech}</span>
        </Card.Text>

       

        <Col md={12} className="home-about-social">

          
          <p>
            Find<span className="purple"> More </span>below
            
          </p>

          <div style={{display: 'flex', justifyContent:'space-evenly'}}>
            <div>
             <a href={props.link} target="_blank" style={{textDecoration: 'none', color:'white'}}> <AiFillGithub  style={{height: '40px', width: '40px'}} /> </a>
            </div>
            <div>
              <a href={props.linkmedium} target="_blank" style={{textDecoration: 'none', color:'white'}}><SiHashnode   style={{height: '40px', width: '40px'}} /></a>
            </div>
            <div>
              <a href={props.linklive} target="_blank" style={{textDecoration: 'none', color:'white'}}><BsBoxArrowUpRight   style={{height: '40px', width: '40px'}} /></a>
            </div>
          </div>
        </Col>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;