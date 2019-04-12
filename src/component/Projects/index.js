// have a computer screen in the middle, and when you go over highlighted project squares around it then fill the computer screen in the middle
import React from "react";
import css from "./projects.module.css";
import computer from "./computer.png";
import whiteNoise from "./white noise.jpeg";

class Projects extends React.Component {
  render() {
    return (
      <div className={css.background}>
        <h1>Projects</h1>
        <div className={css.computerWrapper}>
          <img className={css.whiteNoise} src={whiteNoise} />
          <img className={css.computer} src={computer} />
        </div>
        <div className="buttonBox">
          <button>comming soon</button>
          <button>comming soon</button>
          <button>comming soon</button>
          <button>comming soon</button>
        </div>
      </div>
    );
  }
}

// make button a circle
export default Projects;
