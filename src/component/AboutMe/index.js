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
import record from "./record2.jpg";
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
        label: "Audiobooks",
        src: audioBooks,
        path: "./travellll.jpg"
      },
      {
        label: "nutrition & exercise",
        src: nutrition,
        path: "./travellll.jpg"
      },
      {
        label: "Professional Dj",
        src: djPhoto,
        className: "dj ",
        path: "./dj photo.jpg"
      },

      {
        label: "Event director",
        src: djposter,
        path: "./dj photo.jpg"
      },

      {
        label: "Snowboarder",
        src: snowBoarding,
        path: "./snowboarding photo.jpg"
      },
      {
        label: "Traveller",
        src: travel,
        path: "./travellll.jpg"
      }
    ];

    return (
      <>
        <Nav />
        <div className={css.backgroundImg}>
          <img src={record} alt="background record" />
        </div>
        <div className={css.wrapper}>
          {images.map((selection, index) => (
            <div className={css.item}>
              <div className={css.polaroid}>
                <img src={selection.src} alt={selection.label} />
                <div className={css.caption}>
                  {selection.label.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default AboutMe;
