import React from "react";
import css from "./mainmenu.module.css";
import me from "./image (10).png";
import { NavLink } from "react-router-dom";
import Nav from "../navbar";

class MainMenu extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className={css.ogBackGround}>
          <div className={css.background}>
            <div className={css.container}>
              <div className="picture">
                <img className={css.picture} src={me} alt="pho" />
                <p className={css.contact}>Contact : omarsultani@msn.com</p>
              </div>
              <div classname={css.text}>
                <div className={css.text}>
                  <h2 className={css.title}>Omar Sultani</h2>
                  <h3>Junior Front end developer</h3>
                  <div className="location ">
                    <h4>Nottingham</h4>
                    {/* put robin hood icon picture here */}
                  </div>
                  <h5> Skills</h5>
                  <p>
                    Html, Css, Javascript, (ES6/ES7), React
                    <p> Node js, Mongo db, Express, Github, TDD , Agile</p>
                  </p>
                  <div className="btn-container" />
                  {/* <p> feel free to contact me at omarsultani@msn.com </p> */}
                  <br />
                  <p>"there is nothing I love more than good conversation "</p>
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
export default MainMenu;
