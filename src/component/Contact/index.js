import React from "react";
import Nav from "../navbar/index";
import me from "./me.png";

const Contact = () => (
  <>
    <Nav />
    <div className="contact-page">
      <div className="contact-page-container">
        <div className="picture-container">
          {" "}
          <img className="picture" src={me} alt="pho" />
          <h1>About me</h1>
        </div>
        <p>
          As a Flutter developer with 5  years of professional coding experience, I bring a deep curiosity and enthusiasm to every project. My journey is fueled by a relentless hunger for networking, embracing new challenges, and bringing a positive outlook and strong communication skills to any working environment. The dynamic world of tech, especially the fascinating realm of mobile, AI, health and blockchain, captivates me. I am committed to developing impactful technology, blending creativity and fun in my pursuit of continuous learning and innovation, Im looking for more flutter roles, but happy to learn, experiment with other mobile languages and anything blockchain.
        </p>
        <div className="links-container">
          <a
            href="mailto:omarsultani@msn.com"
            style={{ textDecoration: "none" }}
            className="contact-links"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/omar-sultani/"
            style={{ textDecoration: "none" }}
            className="contact-links"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/bromar2292?tab=repositories"
            style={{ textDecoration: "none" }}
            className="contact-links"
          >
            Github
          </a>
          {/* <a
                className="contact-link"
                href="https://www.linkedin.com/in/omar-sultani/"
              >
                <img />
              </a>
            </div>
            <div>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/omar-sultani/"
              >
                <img />
              </a> */}
        </div>
      </div>
    </div>
  </>
);

export default Contact;
