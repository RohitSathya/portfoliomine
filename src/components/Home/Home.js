import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from '../About/About'
import Projects from "../Projects/Projects";
import Resume from '../Resume/ResumeNew'
import Certificate from "../Certificate/certificate";
function Home() {
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
                <strong className="main-name" style={{ color: "#ffcbc4" }}> ROHIT SATHYA</strong>

              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src='https://cdn.prod.website-files.com/659f77ad8e06050cc27ed531/65ef63f6bd30ab838939a4ae_Developer%20productivity%20tools%202024.webp'
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <section id="home2"><Home2 /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="certificate"><Certificate /></section>
    </section>
  );
}


export default Home;
