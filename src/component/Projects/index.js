// have a computer screen in the middle, and when you go over highlighted project squares around it then fill the computer screen in the middle
import React from "react";
import css from "./projects.module.css";

import medimeals from "./Screen Shot 2019-04-26 at 14.15.34.png";
import groove from "./thegroove.jpg";
import littleThings from "./thelittlethings.jpg";
import soup from "./soupforsoul.jpg";
import pushkins from "./Screen Shot 2019-04-28 at 11.11.38.png";
import Nav from "../navbar";

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
        label: "medimeals",
        src: medimeals,
        path: "./travellll.jpg"
      },
      {
        label: "pushkins prefers",
        src: pushkins,
        path: "./travellll.jpg"
      },

      {
        label: "the groove",
        src: groove,
        path: "./dj photo.jpg"
      },
      {
        label: "the little things",
        src: littleThings,
        path: "./dj photo.jpg"
      },

      {
        label: "soup for the soul",
        src: soup,
        path: "./snowboarding photo.jpg"
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
        <h1 className={css.title}>Projects</h1>
        <div className={css.titlesTextBox}>
          {images.map((selection, index) => (
            <h2
              className={selection.className}
              onMouseEnter={() => this.onEnter(index)}
            >
              {selection.label.toUpperCase()}
            </h2>
          ))}
        </div>
      </>
    );
  }
}

// make button a circle
export default Projects;
