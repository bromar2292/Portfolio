import React from "react";
import MainMenu from "../mainmenu";
import Contact from "../Contact/index";

import "./App.css";
import Projects from "../Projects/index";
import Experience from "../Experience";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<MainMenu />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </main>
);

export default App;
