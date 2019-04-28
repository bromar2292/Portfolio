import React from "react";
import css from "./Contact.module.css";

class Contact extends React.Component {
  render() {
    return (
      <>
        <div className={css.h1}>
          <h1>Contact</h1>
          <div>
            <div> email : omarsultani@msn.com</div>
            <div> linked in : blah blah blah</div>
            <div> Github : blah blah </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
