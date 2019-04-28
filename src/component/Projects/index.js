// have a computer screen in the middle, and when you go over highlighted project squares around it then fill the computer screen in the middle
import React from "react";
import css from "./projects.module.css";
import computer from "./computer.png";
import whiteNoise from "./white noise.jpeg";
import medimeals from "./Screen Shot 2019-04-26 at 14.15.34.png";
import groove from "./thegroove.jpg";
import littleThings from "./thelittlethings.jpg";
import soup from "./soupforsoul.jpg";
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
        <div className={css.background}>
          <h1 className={css.h1}>{this.props.title}</h1>
          <div className={css.computerWrapper}>
            <img className={css.whiteNoise} src={whiteNoise} alt="phto" />
            <img className={css.computer} src={computer} alt="phto" />
          </div>
          <div className={css.buttonbox}>
            <button>comming soon</button>
            <button>comming soon</button>
            <button>comming soon</button>
            <button>comming soon</button>
          </div>
        </div>
      </>
    );
  }
}

// make button a circle
export default Projects;
