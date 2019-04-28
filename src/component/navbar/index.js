import React from "react";

import css from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import home from "./image (8).png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0
    };
  }
  render() {
    // const menu = [
    //   {
    //     label: "Projects",
    //     path: "./projects",
    //     style: "projects"
    //   },
    //   {
    //     label: "Experience",
    //     path: "./experience",
    //     style: "experience"
    //   },
    //   {
    //     label: "About me",
    //     path: "./aboutme",
    //     style: "aboutme"
    //   }
    // ];
    return (
      <div className={css.navContainer}>
        <div className={css.navbar}>
          {/* {menu.map((selection, index) => (
          <NavLink to={selection.path}>
            <h2> {selection.label}</h2>
          </NavLink>
        ))} */}

          <NavLink to="/projects">
            <h4 className={css.projects}> Projects </h4>
          </NavLink>
          <NavLink to="/experience">
            <h4 className={css.experience}> Experience </h4>
          </NavLink>
          <NavLink to="/aboutme">
            <h4 className={css.aboutme}> About me </h4>
          </NavLink>
          <NavLink to="/">
            <img className={css.homePage} src={home} alt="home" />
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Nav;
