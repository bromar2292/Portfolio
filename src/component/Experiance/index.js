// school of code bootcamp
// sales at 123 reg
import React from "react";

import css from "./Experiance.module.css";

class Experiance extends React.Component {
  render() {
    return (
      <>
        <h1 className={css.h1}>{this.props.title}</h1>
        <div className={css.box}>
          <div className={css.image} />
          <div>
            <h2>{this.props.header}</h2>
            <p>{this.props.info}</p>
          </div>
        </div>
      </>
    );
  }
}
export default Experiance;
