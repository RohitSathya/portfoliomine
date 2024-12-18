import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            About <strong style={{ color: "#ffcbc4" }}>Me</strong>

            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src='https://img.freepik.com/premium-vector/vector-flat-illustration-software-developer-cyber-program-security_776789-211.jpg' alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
        Professional <strong style={{ color: "#ffcbc4" }}>Skillset</strong>

        </h1>

        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
