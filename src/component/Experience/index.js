// school of code bootcamp
// sales at 123 reg
import React from "react";

import Nav from "../navbar";

const Experience = () => (
  <>
    <div className="experience-container">
      <Nav />
      <div className="notepad">
        <div className="pg">
          <h1 className="experience-experience"> Experience</h1>
          <div>
            <div className="work-container">
              <h3 className="work">Currently studying</h3>
              <h5 className="company">
                TDD, Redux, <i className="date">Present</i>
              </h5>
              <div className="txt">
                <li className="txt">
                  Currently progressing with React Js by going through a Udemy
                  course which highlights test-driven development and Redux.
                </li>
              </div>
            </div>
            <div className="work-container">
              <h3 className="work"> Web/Mobile Developer </h3>
              <h5 className="company">
                {" "}
                Energym <i className="date">Dec 2019 - March 2020</i>{" "}
              </h5>

              <div className="txt">
                <li>
                  As one of two developers, I gained huge amounts of development
                  experience, especially in UX design and mobile development.
                </li>
                <li>
                  Using flutter/ dart and React and Firebase to build mobile and
                  web applications.
                </li>

                <li>
                  Reformated the entire mobile development roadmap to fit with
                  deadlines then break down into sprints.
                </li>
                <li>
                  Redesigned the mobile app, reduced features to create a robust
                  MVP model.
                </li>
                <li>
                  Working to high agile standard, having to quickly adapt
                  projects depending on demands.
                </li>
              </div>
            </div>
            <div className="work-container">
              <h3 className="work"> Freelance Developer </h3>
              <h5 className="company">
                {" "}
                Columba, <i className="date"> July 2019 - March 2020</i>{" "}
              </h5>

              <div className="txt">
                <li>
                  Built a WordPress site for this start up, this involved
                  learning the basics of WordPress.
                </li>
                <li>
                  Worked with Ceo project manager and designer to build a
                  membership website, using React Js and Firebase.
                </li>

                <li>
                  Strength in understanding online businesses needs and solving
                  problems.
                </li>
              </div>
            </div>

            <div className="work-container">
              <h3 className="work"> Junior Developer</h3>
              <h5 className="company">
                {" "}
                Potential <i className="date">Oct 2019 - Dec 2019</i>
              </h5>

              <div className="txt">
                <li>
                  Working at potential was enlightening because I was learning
                  from senior developers, we used React Js, Next Js sass.
                </li>
                <li>
                  Continually building websites by copying other websites Like
                  for like, considerably sharpened my javascript and sass
                  skills.
                </li>
              </div>
            </div>
            <div className="work-container">
              <h3 className="work"> Bootcamper </h3>
              <h5 className="company">
                School of Code Bootcamp,{" "}
                <i className="date">Feb 2019 - June 2019</i>
              </h5>
              <div className="txt">
                <li className="txt">
                  From 500 down to 23, earned my place and Graduated from the
                  legendary School of Code 16 week intensive bootcamp.
                </li>

                <li className="txt">
                  Learnt the fundamentals of full-stack development with weekly
                  talks and presentations from industry professionals.
                </li>
                <li className="txt">
                  Created sites and mobile apps, then presented our final
                  project as a team on demo day.
                </li>
                <li className="txt">
                  High focus on team work presentations, soft skills, networking
                  and the art of googling.
                </li>
                <li className="txt">
                  This is the most fun I've had in an education, I knew code was
                  the future for me.
                </li>
              </div>
            </div>
            <div className="work-container">
              <h3 className="work"> Online Expert </h3>
              <h5 className="company">
                {" "}
                Go daddy, <i className="date"> 2016 - 2018</i>
              </h5>

              <div className="txt">
                <li>
                  Sold websites and marketing solutions to a wide range of
                  businesses learning strong communication skills.
                </li>
                <li>
                  Using soft skills and building strong relationships to become
                  a top sales performer and regular change maker.
                </li>

                <li>
                  Strength in understanding online businesses needs and solving
                  problems.
                </li>
              </div>
            </div>
            <div className="work-container">
              <h3 className="work">
                Professional DJ and event runner,
                <i className="date"> 2013 - Present</i>
              </h3>

              <div className="txt">
                <li>
                  Much like coding, djing is a skill you are always improving on
                  theres always more music/ ways to code.
                </li>
                <li>
                  Huge amount of creative transferable skills such as marketing
                  ,design ,networking and management.
                </li>

                <li>Evidence of drive, passion and self starter attributes.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Experience;
