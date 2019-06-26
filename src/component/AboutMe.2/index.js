//  about me will look like lillys page where you scroll down and the whole left side changes photo.
// exercise and nutrition enthusiast
// dj
// event runner
// snowboarder
// traveller
// find pictures i need for all these pages
// import React from "react";
// import css from "./AboutMe.module.css";

import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import MediaQuery from "react-responsive";
import css from "./AboutMe.module.css";
import djPhoto from "./dj photo.jpg";
import djposter from "./thegrooveevents.jpg";

import snowBoarding from "./snowboarding photo.jpg";
import travel from "./travellll.jpg";
import festivals from "./musicfestivals.jpg";
import audioBooks from "./audio books.jpg";
import nutrition from "./iStock-590077924-copy.jpg";
import Nav from "../navbar";
// import trumpinHomeImg from './trumpinHome.png';

// import lasVaguenessHomeImg from "./lasVaguenessHome.png";

// const styles = {
//   homeImg: {
//     position: "absolute",

//     width: "100vh",
//     left: "0%"
//   },
//   homeImgIpad: {
//     position: "absolute",
//     height: "auto",
//     width: "100vw",
//     left: "0%"
//   },
//   homeImgMobile: {
//     position: "absolute",
//     height: "auto",
//     width: "100vw",
//     left: "0%"
//   }
// };

class AboutMe extends Component {
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
        label: "nutrition & exercise",
        src: nutrition,
        path: "./travellll.jpg"
      },
      {
        label: "professional Dj",
        src: djPhoto,
        className: "dj ",
        path: "./dj photo.jpg"
      },
      {
        label: "event director",
        src: djposter,
        path: "./dj photo.jpg"
      },

      {
        label: "snowboarder",
        src: snowBoarding,
        path: "./snowboarding photo.jpg"
      },
      {
        label: "traveller",
        src: travel,
        path: "./travellll.jpg"
      },
      {
        label: "festivals",
        src: festivals,
        path: "./travellll.jpg"
      },
      {
        label: "Audiobooks",
        src: audioBooks,
        path: "./travellll.jpg"
      }
    ];

    return (
      <>
        <Nav />
        <div className={css.imgContainter}>
          {images
            .filter((selection, index) => {
              return this.state.selection === index;
            })
            .map(selection => (
              <img
                className={css.homeImg}
                src={selection.src}
                alt={selection.label}
                // href={selection.href}
              />
            ))}
        </div>
        <h1 className={css.title}>About me</h1>
        <div className={css.titlesTextBox}>
          {images.map((selection, index) => (
            <h4
              className={selection.className}
              onMouseEnter={() => this.onEnter(index)}
            >
              {selection.label.toUpperCase()}
            </h4>
          ))}
        </div>
      </>
    );
  }
}

export default AboutMe;
