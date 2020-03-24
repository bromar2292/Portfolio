import React from "react";
import MainMenu from "../mainmenu";
import Contact from "../Contact/index";

import "./App.css";
import Projects from "../Projects/index";
import Experience from "../Experience";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={MainMenu} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Switch>
  </main>
);

export default App;
