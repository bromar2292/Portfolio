// have a computer screen in the middle, and when you go over highlighted project squares around it then fill the computer screen in the middle
import React from "react";
import css from "./projects.module.css";

import medimeals from "./Screen Shot 2019-04-26 at 14.15.34.png";
import groove from "./groove.png";
import record from "./record.jpg";
// import soup from "./soupforsoul.jpg";
import pushkins from "./Screen Shot 2019-04-28 at 11.11.38.png";
import Nav from "../navbar";
import ecotech from "./eco.png";
import talent from "./talentgrid.png";
// import mongodb from "./mongodb.png";
// import nodejs from "./nodejs.png";
import react from "./react.png";
// import reactNative from "./reactnative.png";
// import firebase from "./firebase_logo_shot.png";
// import CSS from "./css.png";
// import html from "./html.png";
// import js from "./js.png";
// import adobeXD from "./adobe.png";
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
        tech: wordpress,
        description:
          "Paid work for the amazing agency called columba network, with no previous experiance building a wordpress website, I built this websit from scratch using wordpress."
      },
      {
        label: "Ecommunity",
        src: eco,
        path: "./travellll.jpg",
        tech: ecotech,
        description:
          "In the school of code, this was my final project. In the last 20 days as a team of 4, we built the Eccomunity app, with no experience with any of these technologies we built a working mobile app. This app guides you to eco-friendly businesses in your local area and gives you points for shopping at different locations, with live updates using a barcode system."
      },
      {
        label: "medimeals",
        src: medimeals,
        path: "./travellll.jpg",
        tech: react,

        description:
          "Personal project combining my passions for nutrition and tech, Medimeals is a work in progress which will give people the best nutritional recipes based on which illness they have , this is built-in react javascript and HTML, it will work with my own data in mongo DB, it will also use restful API from edamame to gather other recipes."
      },
      {
        label: "pushkins prefers",
        src: pushkins,
       
        tech: react,

        description:
          "Shadowing and working with the lead designer of razzberry pie as he works on his website involving music we both love, often contributing to javascript code and learning much of the design fundamentals from a highly experienced professional"
      },

      {
        label: "talent chart",
        src: talent,
        tech: hr,
        description:
          "A huge problem in some big companies is managing talent, sometimes this is done on paper, so we created a grid system, which is password protected, that allows you to organise your employees talent, then save the grid to come back to at another time, we built this in react and used node js Mongo DB for the back end to store the information."
      },
      {
        label: "Music events",
        src: groove,
       
        tech: record,

        description:
          "For 6 years I have run multiple nights in Nottingham as well as being apart of festivals, design, promotion, marketing, accounting and managing, this is a great example of someone who is happy to learn and take initiative as well as creative thinking."
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
          <div>
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map(selection => (
                <h1 className={css.title2}>{selection.label.toUpperCase()} </h1>
              ))}
          </div>
          <div>
            <h2 className={css.descriptionTitle}> Description :</h2>
            {images
              .filter((selection, index) => {
                return this.state.selection === index;
              })
              .map(selection => (
                <h6 className={css.description}>{selection.description}</h6>
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
