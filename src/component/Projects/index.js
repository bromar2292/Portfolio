// have a computer screen in the middle, and when you go over highlighted project squares around it then fill the computer screen in the middle
import React from "react";
import css from "./projects.module.css";

import medimeals from "./Screen Shot 2019-04-26 at 14.15.34.png";
import groove from "./groove.png";
import record from "./record.jpg";
import soup from "./soupforsoul.jpg";
import pushkins from "./Screen Shot 2019-04-28 at 11.11.38.png";
import Nav from "../navbar";
import ecotech from "./eco.png";

import mongodb from "./mongodb.png";
import nodejs from "./nodejs.png";
import react from "./react.png";
import reactNative from "./reactnative.png";
import firebase from "./firebase_logo_shot.png";
import CSS from "./css.png";
import html from "./html.png";
import js from "./js.png";
import adobeXD from "./adobe.png";

import hr from "./hr.png";
import eco from "./ecomune.png";
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
        label: "Ecommunity",
        src: eco,
        path: "./travellll.jpg",
        tech: ecotech,
        description:
          "In school of code this was my final project, in the last 20 days as a team of 4 we built the eccomunity app, with no experiance with any of these technologies we built a working mobile app. This app shows you to eco friendly busineses in your local area, and gives your points for shopping at differnt locations, with live updates using a barcode system. "
      },
      {
        label: "medimeals",
        src: medimeals,
        path: "./travellll.jpg",
        tech: react,

        description:
          "persional project combing love for nutrition and tech, medi meals is a work in progress which will "
      },
      {
        label: "pushkins prefers",
        src: pushkins,
        path: "./travellll.jpg",
        tech: react,

        description:
          "In school of code this was my final project, in the last 20 days as a team of 4 we built the eccomunity app, with no experiance with any of these technologies we built a working mobile app. This app shows you to eco friendly busineses in your local area, and gives your points for shopping at differnt locations, with live updates using a barcode system. "
      },

      {
        label: "hr chart",
        src: groove,
        path: "./dj photo.jpg",
        tech: hr,
        description:
          "In school of code this was my final project, in the last 20 days as a team of 4 we built the eccomunity app, with no experiance with any of these technologies we built a working mobile app. This app shows you to eco friendly busineses in your local area, and gives your points for shopping at differnt locations, with live updates using a barcode system. "
      },
      {
        label: "Music events",
        src: groove,
        path: "./dj photo.jpg",
        tech: record,
        CSS,
        html,
        description:
          "In school of code this was my final project, in the last 20 days as a team of 4 we built the eccomunity app, with no experiance with any of these technologies we built a working mobile app. This app shows you to eco friendly busineses in your local area, and gives your points for shopping at differnt locations, with live updates using a barcode system. "
      }
    ];
    return (
      <>
        <Nav />
        <div className={css.body}>
          <div className={css.imgContainer}>
            <div className={css.spot} />
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map(selection => (
                <img
                  className={css.laptop}
                  src={selection.src}
                  alt={selection.label}
                  // href={selection.href}
                />
              ))}

            <div className={css.btm} />
            <div className={css.shadow} />
          </div>
          <div className={css.titlecontainer}>
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map(selection => (
                <h1 className={css.title2}>{selection.label.toUpperCase()} </h1>
              ))}
          </div>
          <div>
            <h2> Description :</h2>
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map(selection => (
                <h6>{selection.description}</h6>
              ))}
          </div>
        </div>
        <div className={css.right}>
          <h1 className={css.title}>PROJECTS</h1>
        </div>
        <div className={css.titlesTextBox}>
          {images.map((selection, index) => (
            <h3
              className={selection.className}
              onMouseEnter={() => this.onEnter(index)}
            >
              {selection.label.toUpperCase()}
            </h3>
          ))}
        </div>
        <div className={css.tech}>
          {images
            .filter((selection, index) => {
              return this.state.selection === index;
            })
            .map(selection => (
              <img
                className={css.icons}
                src={selection.tech}
                alt={selection.label}
                // href={selection.href}
              />
            ))}
        </div>
      </>
    );
  }
}

// make button a circle
export default Projects;
