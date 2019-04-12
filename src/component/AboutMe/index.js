//  about me will look like lillys page where you scroll down and the whole left side changes photo.
// exercise and nutrition enthusiast
// dj
// event runner
// snowboarder
// traveller
// find pictures i need for all these pages
import React from "react";
import css from "./AboutMe.module.css";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="name">
          <h1>Omar Sultani</h1>
          <h3>Junior Full stack web developer</h3>
          <div className="location ">
            <h4>Nottingham</h4>
            {/* put robin hood icon picture here */}
          </div>
          <p>
            Html, Css, Javascript, (ES6/ES7),
            <p>React , Node js, Mongo db, Github, command line</p>
          </p>
          <div className="btn-container" />
          <button className="button"> Projects</button>
          <button className="button">Experiance</button>
          <button className="button">About me</button>
          <button className="button">Contact</button>
        </div>
      </div>
    );
  }
}

export default AboutMe;
