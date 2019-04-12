import React from "react";
import css from "./mainmenu.module.css";
import me from "./image (8).png";
class MainMenu extends React.Component {
  render() {
    return (
      <div className={css.background}>
        <div className={css.container}>
          <div className="picture">
            <img className={css.picture} src={me} />
          </div>
          <div classname={css.text}>
            <div className="name">
              <h1>Omar Sultani</h1>
              <h3>Junior Full stack web developer</h3>
              <div className="location ">
                <h4>Nottingham</h4>
                {/* put robin hood icon picture here */}
              </div>
              <p>
                Html, Css, Javascript, (ES6/ES7), React
                <p> Node js, Mongo db, Express, Github, Command line</p>
              </p>
              <div className="btn-container" />
              <button className="button"> Projects</button>
              <button className="button">Experiance</button>
              <button className="button">About me</button>
              <button className="button">Contact</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// make button a circle
export default MainMenu;
