// school of code bootcamp
// sales at 123 reg
import React from "react";

import css from "./Experience.module.css";
import Nav from "../navbar";

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
          <div className={css.pg}>
            <h1 className={css.experience}> Experience</h1>
            <h3 className={css.work}>School of code </h3>

            <div className={css.txt}>
              <li>
                graduated from the legendary school of code 16 week intensive
                bootcamp
              </li>
              <li />
              <li className={css.thins} />
              <li className={css.thins} />
              <li className={css.thins} />
              <h3 className={css.work}> Go daddy </h3>

              <div className={css.txt}>
                <li>top sales performer, and regular change maker</li>
                <li />
                <li className={css.thins} />
                <li className={css.thins} />
                <li className={css.thins} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
