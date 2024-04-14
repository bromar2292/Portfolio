// have a computer screen in the middle, and when you go over highlighted project squares around it then fill the computer screen in the middle
import React from "react";

import energym from "./energym.png";
import Nav from "../navbar";
import twyn from "./twyn.png";
import ee from "./ee.png";
import shift from "./shift.png"
import react from "./react.png";

import hr from "./hr.png";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0,
      label: "Columba network",
      desciption: "",
      Code: "",
      Demo: "",
      codeButton: false,
      demoButton: true,
    };
  }
  onEnter = (item, selection) => {
    this.setState((prevState) => ({
      selection: item,
      label: selection.label,
      desciption: selection.desciption,
      Code: selection.code,
      Demo: selection.demo,
    }));
  };
  codeButton = () => {
    if (this.state.Demp === "") {
      return this.setState({ demoButton: false });
    } else {
      return this.state.Code;
    }
  };

  render() {
    const images = [
      {
        label: "Twyn",
        src: twyn,
        tech: react,
        demo: "https://columba.netlify.com",
        code: "",
        skills: [
          "Flutter",
          "JavaScript",
          "C#",
          ".net",
          "Swift",
          "Kotlin",
          "Azure",
        ],
        description:
          "For Twyn, I was heavily involved in all parts of the app. Twyn utilized AI speech recognition, video streaming and playback, video precaching, prompt engineering, and Flutter pages and widgets built dynamically from JSON using a content management system. It was truly a fun and innovative place to be.",
      },


      {
        label: "EE/BT",
        src: ee,
        tech: react,
        demo: "",
        code: "https://github.com/bromar2292/final-project-server-eco-warriors",
        skills: ["Flutter", "Bloc", "Clean arcitecture", "Sql", "Unit Testing", "Acessibility"],
        description:
          "At EE, I was Collaborating as part of a large, diverse team, with developers all over the world working in an agile way, using stand-ups, retros and sprint planning to efficiently move the app from native to flutter, focusing on accessibilty and testing to make robust strong code, for an happ being used by millions.",
      },

      {
        label: "Shift",
        src: shift,
        tech: hr,
        demo: "",
        code: "",
        skills: ["FLutter", "Provider", "GetX", "Geo-location"],
        description:
          "At Shift, I worked fully remote as part of a team of 4, Provider for state management, then moved into GetX, while restructuring the app to to clean arcitecture methods. working hand in hand with designders to build beautiful UI ",
      },

      {
        label: "energym",
        src: energym,
        tech: react,
        demo: "https://energym.io/our-tech/",
        code: "",
        skills: [
          "React JS",
          "JavaScript",
          "SASS",
          "Flutter",
          "Dart",
          "Adobe XD",
          "Android Studio",
          "Firebase",
        ],
        description:
          "Energym was an enjoyable, rewarding and fast-paced environment. I would build react applications using react, examples being different leaderboards for competitions and energy savings calculators. Then  I would be designing, planning and building the mobile app. While coordinating with another developer, we created the mobile app using Flutter/dart while using firebase as the back-end. My experience at Energym has made me confident in communicating and planning development sprints as well as working in mobile development. ",
      },
    ];
    return (
      <>
        <Nav />
        <div className="body-projects">
          <div className="img-tech">
            <div className="imgContainer">
              {/* <div className="buttons">
                <a href={this.state.Code}>
                  <button onSubmit={this.codeButton}>See demo</button>
                </a>
                <button>See code</button>
              </div> */}
              <div className="spot" />
              {images
                .filter((selection, index) => {
                  return this.state.selection === index;
                })
                .map((selection) => (
                  <img
                    className="laptop"
                    src={selection.src}
                    alt={selection.label}
                  // href={selection.href}
                  />
                ))}

              <div className="laptop-btm" />
              <div className="laptop-shadow" />
            </div>
          </div>
          {/* map functions must have key */}
          <div>
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map((selection) => (
                <div className="description-skills">
                  <p className="description">{selection.description}</p>
                  <div className="mobile-skills">
                    {selection.skills.map((item, index) => (
                      <p className="skills-projects ">{item}</p>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="right">
          <h1 className="projects-title">PROJECTS</h1>
        </div>
        <div>
          {" "}
          {images.map((selection, index) => (
            <div className="mobile-sections">
              {" "}
              <h3 className="mobile-title">{selection.label.toUpperCase()}</h3>
              <img
                className="mobile-img"
                src={selection.src}
                alt={selection.label}
              />
              <p className="description-mobile"> {selection.description} </p>
              <div className="mobile-skills">
                {selection.skills.map((item, index) => (
                  <p className="skills-projects">{item}</p>
                ))}
              </div>
            </div>
          ))}{" "}
        </div>

        <div className="titlesTextBox">
          {images.map((selection, index) => (
            <h3
              onClick={() => this.onEnter(index, selection)}
              className={selection.className}
            >
              {selection.label.toUpperCase()}
            </h3>
          ))}
        </div>
      </>
    );
  }
}

// make button a circle
export default Projects;
