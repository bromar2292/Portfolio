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
          After studying Nutrition, Exercise and Health, and working two years
          in websites sales, I wanted a change in career. With my curiosity and
          passion for tech, and my purpose of creating a positive impact on
          people’s lives - I began to code. Soon after, I started a 16-week
          intensive bootcamp, worked in the industry as a freelancer and for
          startups. I’m now looking for a role where I can continue to work with
          JavaScript and React/React-Native, as well as learn from other
          developers and collaborate in a team. Currently, I am improving my
          skillset, working through a TDD and Redux course.
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
