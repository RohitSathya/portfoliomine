import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span style={{ color: "#ffcbc4" }}>Rohit Sathya </span>
            from <span style={{ color: "#ffcbc4" }}> Chennai, India.</span>
            <br />
            I am an aspiring MERN Stack Developer.
            <br />
            I have completed Bachelor of Engineering in Computer Science
            in Jeppiaar Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Meditation
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

        
       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
