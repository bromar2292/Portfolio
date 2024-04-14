// school of code bootcamp
// sales at 123 reg
import React from "react";
import experiences from "./experienceData";
import Nav from "../navbar";

const ExperienceSection = ({ title, company, date, items }) => (
  <div className="work-container">
    <h3 className="work">{title}</h3>
    <h5 className="company">
      {company} <b className="date">{date}</b>
    </h5>
    <div className="txt">
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.className}>{item.content}</li>
        ))}
      </ul>
    </div>
  </div>
);
const Experience = () => (
  <>
    <div className="experience-container">
      <Nav />
      <div className="notepad">
        <div className="pg">
          <h1 className="experience-experience">Experience</h1>
          {experiences.map((exp, index) => (
            <ExperienceSection key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  </>
);


export default Experience;
