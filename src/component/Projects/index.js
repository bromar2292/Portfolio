// have a computer screen in the middle, and when you go over highlighted project squares around it then fill the computer screen in the middle
import React from "react";

// import medimeals from "./Screen Shot 2019-04-26 at 14.15.34.png";
// import groove from "./groove.png";
// import record from "./record.jpg";

import energym from "./energym.png";
import Nav from "../navbar";
import ecotech from "./eco.png";
import talent from "./talentgrid.png";

import react from "./react.png";

import columba from "./columba.png";
import hr from "./hr.png";
import eco from "./ecomune.png";
import wordpress from "./WordPress.png";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0
    };
  }

  onEnter = item => {
    this.setState(prevState => ({
      selection: item
    }));
  };

  render() {
    const images = [
      {
        label: "Columba Network",
        src: columba,
        path: "./travellll.jpg",
        tech: react,
        description:
          "Paid work for the amazing agency called columba network, with no previous experience building a wordpress website, I built this website from scratch using wordpress."
      },
      {
        label: "energym",
        src: energym,
        tech: react,
        description:
          "Shadowing and working with the lead designer of razzberry pie as he works on his website involving music we both love, often contributing to javascript code and learning much of the design fundamentals from a highly experienced professional"
      },

      {
        label: "Ecommunity",
        src: eco,
        tech: ecotech,
        description:
          "In the school of code, this was my final project. In the last 20 days as a team of 4, we built the Eccomunity app, with no experience with any of these technologies we built a working mobile app. This app guides you to eco-friendly businesses in your local area and gives you points for shopping at different locations, with live updates using a barcode system."
      },

      {
        label: "talent chart",
        src: talent,
        tech: hr,
        description:
          "A huge problem in some big companies is managing talent, sometimes this is done on paper, so we created a grid system, which is password protected, that allows you to organise your employees talent, then save the grid to come back to at another time, we built this in react and used node js Mongo DB for the back end to store the information."
      }
    ];
    return (
      <>
        <Nav />
        <div className="body-projects">
          <div className="imgContainer">
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

            <div className="btm" />
            <div className="shadow" />
          </div>
          <div>
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map(selection => (
                <h1 className="title2">{selection.label.toUpperCase()} </h1>
              ))}
          </div>
          <div>
            <h2 className="descriptionTitle"> Description :</h2>
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map(selection => (
                <h6 className="description">{selection.description}</h6>
              ))}
          </div>
        </div>
        <div className="right">
          <h1 className="projects-title">PROJECTS</h1>
        </div>

        <div className="tech">
          {images
            .filter((selection, index) => {
              return this.state.selection === index;
            })
            .map(selection => (
              <img
                className="icons"
                src={selection.tech}
                alt={selection.label}
                // href={selection.href}
              />
            ))}
        </div>
        <div className="titlesTextBox">
          {images.map((selection, index) => (
            <h3
              onClick={() => this.onEnter(index)}
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
