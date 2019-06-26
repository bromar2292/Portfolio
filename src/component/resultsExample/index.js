import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import MediaQuery from "react-responsive";

// import trumpinHomeImg from './trumpinHome.png';

// import lasVaguenessHomeImg from "./lasVaguenessHome.png";

// const styles = {
//   homeImg: {
//     position: "absolute",

//     width: "100vh",
//     left: "0%"
//   },
//   homeImgIpad: {
//     position: "absolute",
//     height: "auto",
//     width: "100vw",
//     left: "0%"
//   },
//   homeImgMobile: {
//     position: "absolute",
//     height: "auto",
//     width: "100vw",
//     left: "0%"
//   }
// };

class ProjectExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0
    };
  }

  onEnter = item => {
    this.setState(prevState => ({
      selection: item
    }));
  };

  render() {
    const data = [
      {
        userid: "omarsultani",
        bussines: "cleankilo",
        type: "plastic",
        money: 10
      },
      {
        userid: "omarsultani",
        bussines: "cleankilo",
        type: "plastic",
        money: 10
      },
      {
        userid: "omarsultani",
        bussines: "cleankilo",
        type: "plastic",
        money: 10
      },
      {
        userid: "omarsultani",
        bussines: "cleankilo",
        type: "plastic",
        money: 10
      },
      {
        userid: "omarsultani",
        bussines: "veganman",
        type: "vegan",
        money: 100
      },
      {
        userid: "liam",
        bussines: "veganman",
        type: "vegan",
        money: 100
      },
      {
        userid: "liam",
        bussines: "veganman",
        type: "vegan",
        money: 100
      }
    ];

    const global = data.map((selection, index) => {
      let total = 0;
      total = total + selection.money;
    });
    const username = "omarsultani";
    return (
      <>
        <div className="results">
          {data.map((selection, index) => {
            console.log(selection.userid === username);
          })}
        </div>
      </>
    );
  }
}

export default ProjectExample;
