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
          Hi my name is Omar Sultani and I love coding, teamwork for social good
          and progressing my skills. My other passions are nutrition, exercise,
          being a pro Dj and snowboarding.
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
            Linked in
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
