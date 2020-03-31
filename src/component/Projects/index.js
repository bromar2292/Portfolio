// have a computer screen in the middle, and when you go over highlighted project squares around it then fill the computer screen in the middle
import React from "react";

import energym from "./energym.png";
import Nav from "../navbar";
import ecotech from "./eco.png";
import talent from "./talentgrid.png";

import react from "./react.png";

import columba from "./columba.png";
import hr from "./hr.png";
import eco from "./ecomune.png";

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
      demoButton: true
    };
  }
  onEnter = (item, selection) => {
    this.setState(prevState => ({
      selection: item,
      label: selection.label,
      desciption: selection.desciption,
      Code: selection.code,
      Demo: selection.demo
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
        label: "Columba Network",
        src: columba,

        tech: react,
        demo: "https://columba.netlify.com",
        code: "",
        skills: [
          "React Js",
          "JavaScript",
          "HTML",
          "Sass",
          "Firebase",

          "Wordpress"
        ],
        description:
          "For Columba, I first built their Wordpress Site. Then after completing that successfully. I began to build a full-stack membership site using React and firebase. Clients would be able to sign up, log in and have their dashboard in which to see their performance scores. Columba are able to change each clients scores from the firebase database. This project involved creating a custom pie chart as well as using Chart Js. I worked with the Ceo and a designer to bring this to life. Unfortunately, due to several factors, this project won't be getting finished."
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
          "Firebase"
        ],
        description:
          "Energym was an enjoyable, rewarding and fast-paced environment. I would build react applications using react, examples being different leaderboards for competitions and energy savings calculators. Then  I would be designing, planning and building the mobile app. While coordinating with another developer, we created the mobile app using Flutter/dart while using firebase as the back-end. My experience at Energym has made me confident in communicating and planning development sprints as well as working in mobile development. "
      },

      {
        label: "Ecommunity",
        src: eco,
        tech: ecotech,
        demo: "",
        code: "https://github.com/bromar2292/final-project-server-eco-warriors",
        skills: ["React-Native", "JavaScript", "HTML", "CSS", "Firebase"],
        description:
          "In the school of code, this was my final project. In the last 20 days as a team of 4, we built the Eccomunity app, with no experience with any of these technologies we built a working mobile app. This app guides you to eco-friendly businesses in your local area and gives you points for shopping at different locations, with live updates using a barcode system."
      },

      {
        label: "talent chart",
        src: talent,
        tech: hr,
        demo: "",
        code: "",
        skills: ["React", "JavaScript", "html", "CSS", "Node Js", "Express"],
        description:
          "A huge problem in some big companies is managing talent, sometimes this is done on paper, so we created a grid system, which is password protected, that allows you to organise your employees talent, then save the grid to come back to at another time, we built this in react and used node js Mongo DB for the back end to store the information."
      }
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
                .map(selection => (
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
              .map(selection => (
                <div className="description-skills">
                  <h6 className="description">{selection.description}</h6>
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
