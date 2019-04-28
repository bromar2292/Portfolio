import React from "react";
import css from "./mainmenu.module.css";
import me from "./image (8).png";
import { NavLink } from "react-router-dom";
import Nav from "../navbar";

class MainMenu1 extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className={css.ogBackGround}>
          <div className={css.background}>
            <div className={css.container}>
              <div className="picture">
                <img className={css.picture} src={me} alt="pho" />
              </div>
              <div classname={css.text}>
                <div className="name">
                  <h1>Omar Sultani</h1>
                  <h3>Junior Full stack web developer</h3>
                  <div className="location ">
                    <h4>Nottingham based</h4>
                    {/* put robin hood icon picture here */}
                  </div>
                  <p>
                    Html, Css, Javascript, (ES6/ES7), React
                    <p> Node js, Mongo db, Express, Github, TDD ,Agile</p>
                  </p>
                  <div className="btn-container" />
                  <NavLink to="/projects">
                    <button className="button"> Projects </button>
                  </NavLink>
                  <NavLink to="/experience">
                    <button className="button"> Experience </button>
                  </NavLink>
                  <NavLink to="/aboutme">
                    <button className="button"> About me </button>
                  </NavLink>
                  <NavLink to="contact">
                    <button className="button">Contact</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// make button a circle
export default MainMenu1;
