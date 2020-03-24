// school of code bootcamp
// sales at 123 reg
import React from "react";

import Nav from "../navbar";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0
    };
  }
  render() {
    return (
      <>
        <Nav />
        <div className="notepad">
          <div className="pg">
            <h1 className="experience-experience"> Experience</h1>
            <div>
              <div className="work-container">
                <h3 className="work">Trainie Junior Developer</h3>
                <h5 className="company">School of Code Bootcamp</h5>
                <div className="txt">
                  <li className="txt">
                    Graduated from the legendary School of Code 16 week
                    intensive bootcamp.
                  </li>

                  <li className="txt">
                    Created sites and mobile apps, then presented as part of a
                    team on demo day.
                  </li>
                  <li className="txt">
                    High focus on team work presentations, soft skills,
                    networking and the art of googling.
                  </li>
                </div>
              </div>
              <div className="work-container">
                <h3 className="work"> Online Expert </h3>
                <h5 className="company"> Go daddy </h5>

                <div className="txt">
                  <li>
                    Sold websites and marketing solutions to a wide range of
                    businesses.
                  </li>
                  <li>Top sales performer and regular change maker.</li>

                  <li>
                    Strength in understanding online businesses needs and
                    solving problems.
                  </li>
                </div>
              </div>
              <div className="work-container">
                <h3 className="work"> Trainie Developer </h3>
                <h5 className="company"> Go daddy </h5>

                <div className="txt">
                  <li>
                    Sold websites and marketing solutions to a wide range of
                    businesses.
                  </li>
                  <li>Top sales performer and regular change maker.</li>

                  <li>
                    Strength in understanding online businesses needs and
                    solving problems.
                  </li>
                </div>
              </div>
              <div className="work-container">
                <h3 className="work"> Online Expert </h3>
                <h5 className="company"> Go daddy </h5>

                <div className="txt">
                  <li>
                    Sold websites and marketing solutions to a wide range of
                    businesses.
                  </li>
                  <li>Top sales performer and regular change maker.</li>

                  <li>
                    Strength in understanding online businesses needs and
                    solving problems.
                  </li>
                </div>
              </div>
              <div className="work-container">
                <h3 className="work">Professional DJ and event runner </h3>

                <div className="txt">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Experience;
