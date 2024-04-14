import React from "react";

// import me from "./me.png";
import { NavLink } from "react-router-dom";

const MainMenu = () => (
  <>
    <div className="ogBackGround">
      <div className="background">
        <div className="container">
          {/* <div className="picture">
                <img className="picture" src={me} alt="pho" />
                <p className="contact">Contact : omarsultani@msn.com</p>
              </div> */}
          <div className="text">
            <div className="text">
              <h2 className="name">Omar Sultani</h2>
              <h3 className="job-title"> Flutter developer of 4+ years</h3>

              <p className="skills">
                Flutter, Dart, JavaScript, React, React-Native, Html, Css , Sass, .Net
                Jest, Node js, Mongo db, Express, Firebase, Azure, Back4App, Github, TDD
                , Agile, Jira, npm, Adobe XD,
              </p>
              <div className="btn-container" />
            </div>
          </div>
          <div className="menu-navbar">
            {/* {menu.map((selection, index) => (
          <NavLink to={selection.path}>
            <h2> {selection.label}</h2>
          </NavLink>
        ))} */}

            <NavLink to="/projects" style={{ textDecoration: "none" }}>
              <h4 className="menu-nav-contents"> Projects </h4>
            </NavLink>
            <NavLink to="/experience" style={{ textDecoration: "none" }}>
              <h4 className="menu-nav-contents"> Experience </h4>
            </NavLink>
            <NavLink to="/contact" style={{ textDecoration: "none" }}>
              <h4 className="menu-nav-contents"> About </h4>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </>
);

// make button a circle
export default MainMenu;
