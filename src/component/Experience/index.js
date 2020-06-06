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
              <h3 className="work">Volunteering and Personal Development</h3>
              <h5 className="company">
                Hellohub/Supernova
                <b className="date"> March 2020 - Present</b>
              </h5>
              <div className="txt">
                <ul>
                  <li className="txt">
                    Currently, I am completing Udemy courses in data structures
                    and algorithms,TDD and Redux.
                  </li>
                  <li>
                    For Hellohub I am gaining experience working on a large
                    codebase, a full-stack React web application similar to
                    slack to bring people of london together during the
                    pandemic, My work involves adding new features, thinking of
                    technical solutions and removing bugs.{" "}
                  </li>
                  <li>
                    For Supernova I am building React web pages by following
                    designs in adobe xd. Helping to shape a crowdfunding
                    platform for scientists.
                  </li>
                </ul>
              </div>
            </div>
            <div className="work-container">
              <h3 className="work"> Web/Mobile Developer </h3>
              <h5 className="company">
                {" "}
                Energym <b className="date">Dec 2019 - March 2020</b>{" "}
              </h5>

              <div className="txt">
                <ul>
                  <li>
                    As one of two developers, I gained huge amounts of
                    development experience, especially in UX design and mobile
                    development.
                  </li>
                  <li>
                    Using flutter/ dart and React and Firebase to build mobile
                    and web applications.
                  </li>

                  <li>
                    Reformated the entire mobile development roadmap to fit with
                    deadlines then break down into sprints.
                  </li>
                  <li>
                    Redesigned the mobile app, reduced features to create a
                    robust MVP model.
                  </li>
                  <li>
                    Working to high agile standard, having to quickly adapt
                    projects depending on demands.
                  </li>
                </ul>
              </div>
            </div>
            <div className="work-container">
              <h3 className="work"> Freelance Developer </h3>
              <h5 className="company">
                {" "}
                Columba <b className="date"> July 2019 - March 2020</b>{" "}
              </h5>

              <div className="txt">
                <ul>
                  <li>
                    Built a WordPress site for this start up, this involved
                    learning the basics of WordPress.
                  </li>
                  <li>
                    Worked with Ceo project manager and designer to build a
                    membership website, using React Js and Firebase.
                  </li>

                  <li>
                    Strength in understanding online businesses needs and
                    solving problems.
                  </li>
                </ul>
              </div>
            </div>

            <div className="work-container">
              <h3 className="work"> Junior Developer</h3>
              <h5 className="company">
                {" "}
                Potential <b className="date">Oct 2019 - Dec 2019</b>
              </h5>

              <div className="txt">
                <ul>
                  <li>
                    Working at potential was enlightening because I was learning
                    from senior developers, we used React Js, Next Js sass.
                  </li>
                  <li>
                    Continually building websites by copying other websites Like
                    for like, considerably sharpened my javascript and sass
                    skills.
                  </li>
                </ul>
              </div>
            </div>
            <div className="work-container">
              <h3 className="work"> Bootcamper </h3>
              <h5 className="company">
                School of Code Bootcamp,{" "}
                <b className="date">Feb 2019 - June 2019</b>
              </h5>
              <div className="txt">
                <ul>
                  <li className="txt">
                    From 500 down to 23, earned my place and Graduated from the
                    legendary School of Code 16 week intensive bootcamp.
                  </li>

                  <li className="txt">
                    Learnt the fundamentals of full-stack development with
                    weekly talks and presentations from industry professionals.
                  </li>
                  <li className="txt">
                    Created sites and mobile apps, then presented our final
                    project as a team on demo day.
                  </li>
                  <li className="txt">
                    High focus on team work presentations, soft skills,
                    networking and the art of googling.
                  </li>
                  <li className="txt">
                    This is the most fun I've had in an education, I knew code
                    was the future for me.
                  </li>
                </ul>
              </div>
            </div>
            <div className="work-container">
              <h3 className="work"> Online Expert </h3>
              <h5 className="company">
                {" "}
                Go daddy, <b className="date"> 2016 - 2018</b>
              </h5>

              <div className="txt">
                <ul>
                  <li>
                    Sold websites and marketing solutions to a wide range of
                    businesses learning strong communication skills.
                  </li>
                  <li>
                    Using soft skills and building strong relationships to
                    become a top sales performer and regular change maker.
                  </li>

                  <li>
                    Strength in understanding online businesses needs and
                    solving problems.
                  </li>
                </ul>
              </div>
            </div>
            <div className="work-container">
              <h3 className="work">
                Professional DJ and event runner,
                <b className="date"> 2013 - Present</b>
              </h3>

              <div className="txt">
                <ul>
                  <li>
                    Much like coding, djing is a skill you are always improving
                    on theres always more music/ ways to code.
                  </li>
                  <li>
                    Huge amount of creative transferable skills such as
                    marketing ,design ,networking and management.
                  </li>

                  <li>
                    Evidence of drive, passion and self starter attributes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Experience;
