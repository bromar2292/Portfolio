// school of code bootcamp
// sales at 123 reg
import React from "react";

import css from "./Experience.module.css";
import Nav from "../navbar";
import binder from "./binder.png";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0
    };
  }
  render() {
    // const experience = [
    //   {
    //     title: "Experience",
    //     header: "School of code bootcamp",
    //     info:
    //       "Graduate at the legendary school of code bootcamp 4 month intensive bootcampEmphasis on learning to learn Team working and project management skills",
    //     image: "comming soon"
    //   },

    //   {
    //     header: "Go Daddy",
    //     info:
    //       "Top sales performer strong knowledge in business side of websites  SEO google Adwords"
    //   }
    // ];
    return (
      <div className={css.screen}>
        <div className={css.content}>
          <Nav />
          <div className={css.notepad}>
            <img className={css.binder} src={binder} alt="binder" />
            <div className={css.pg}>
              <h1 className={css.experience}> Experience</h1>
              <h3 className={css.work}>School of Code </h3>

              <div className={css.txt}>
                <li className={css.txt}>
                  Graduated from the legendary School of Code 16 week intensive
                  bootcamp.
                </li>

                <li className={css.txt}>
                  Created sites and mobile apps, then presented as part of a
                  team on demo day.
                </li>
                <li className={css.txt}>
                  High focus on team work presentations, soft skills, networking
                  and the art of googling.
                </li>

                <h3 className={css.work}> Go daddy </h3>

                <div className={css.txt}>
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
                <h3 className={css.work}>Professional DJ and event runner </h3>

                <div className={css.txt}>
                  <li>
                    Much like coding, djing is a skill you are always improving
                    on theres always more music/ ways to code.
                  </li>
                  <li>
                    Huge amount of creative transferable skills such as
                    marketing ,design ,networking and management.
                  </li>

                  <li className={css.txt}>
                    Evidence of drive, passion and self starter attributes.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
