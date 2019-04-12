import React, { Component } from "react";
import MainMenu from "../mainmenu";
import Contact from "../Contact/index";
import AboutMe from "../AboutMe/index";
import "./App.css";
import Projects from "../Projects/index";
import Experiance from "../Experiance";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MainMenu />
        <Projects />
        <Experiance
          title="Experiance"
          header="School of code bootcamp"
          info="Graduate at the legendary school of code bootcamp
4 month intensive bootcamp
        Emphasis on learning to learn
        Team working and project management skills"
        />
        <Experiance
          header="Go Daddy"
          info="Top sales performer 
strong knowledge in business side of websites  SEO google Adwords"
        />
        <Contact /> */}
      </div>
    );
  }
}

export default App;
