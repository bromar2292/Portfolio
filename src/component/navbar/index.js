import React from "react";

import { NavLink } from "react-router-dom";
import menu from "./hamburger.png";
import { HamburgerSpin } from "react-animated-burgers";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0,
      isActive: false
    };
  }
  toggleButton = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log(this.state.isActive);
  };

  render() {
    return (
      <>
        <div className="navContainer">
          <div className="navbar">
            {/* {menu.map((selection, index) => (
          <NavLink to={selection.path}>
            <h2> {selection.label}</h2>
          </NavLink>
        ))} */}
            <div>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <h4 className="home"> OS </h4>
              </NavLink>
            </div>

            <img
              className="hamburger"
              isActive={this.state.isActive}
              src={menu}
              alt="hamburger"
              onClick={this.toggleButton}
            />

            {/* <HamburgerSpin
            className="hamburger"
            isActive={this.state.isActive}
            toggleButton={this.toggleButton}
            // buttonStyle={{ backgroundColor: "white" }}
            buttonColor="#eab125"
            barColor="white"
          /> */}
            <div className="nav-menu">
              <NavLink to="/projects" style={{ textDecoration: "none" }}>
                <h4 className="projects"> Projects </h4>
              </NavLink>
              <NavLink to="/experience" style={{ textDecoration: "none" }}>
                <h4 className="experience"> Experience</h4>
              </NavLink>
              <NavLink to="/contact" style={{ textDecoration: "none" }}>
                <h4 className="contact">Contact </h4>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={`${this.state.isActive}`}>
          <a href="/projects" style={{ textDecoration: "none" }}>
            <div className="hamburger-menu"> Projects</div>
          </a>
          <a href="/experience" style={{ textDecoration: "none" }}>
            <div className="hamburger-menu"> Experience</div>
          </a>
          <a href="/contact" style={{ textDecoration: "none" }}>
            <div className="hamburger-menu"> Contact</div>
          </a>
        </div>
      </>
    );
  }
}
export default Nav;
