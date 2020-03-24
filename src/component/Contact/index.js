import React from "react";
import Nav from "../navbar/index";
class Contact extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="contact-page">
          <div className="contact-page-container">
            <h1>Contact</h1>
            <p>
              Theres nothing I love more than speaking to and learning from new
              people. Drop me an email or message me on linked in I would love
              to hear from you.{" "}
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
                href="https://www.linkedin.com/in/omar-sultani/"
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
  }
}

export default Contact;
