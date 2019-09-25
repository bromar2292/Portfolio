import React from "react";
import MainMenu from "../mainmenu";
import Contact from "../Contact/index";
import AboutMe from "../AboutMe/index";
import "./App.css";
import Projects from "../Projects/index";
import Experience from "../Experience";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={MainMenu} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/aboutme" component={AboutMe} />

      {/* <Route path="/lasvag" component={LasVagueness} />
      <Route path="" component={Phorm} />
      <Route path="/operationp" component={OperationPlumbob} />
      <Route path="/nucle" component={Nuclearosis} />
      <Route path="/warm" component={WarMachine} />>
      <Route path="" component={About} />
      <Route path="/blue" component={BlueStreak} /> */}
    </Switch>
  </main>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">

/* <MainMenu />
        <Projects title="Projects" />
        <Experiance
          title="Experiance"
          header="School of code bootcamp"
          info="Graduate at the legendary school of code bootcamp
4 month intensive bootcamp
        Emphasis on learning to learn
        Team working and project management skills"
        />
        <Experiance
          header="Go Daddy"
          info="Top sales performer
strong knowledge in business side of websites  SEO google Adwords"
        /> */

// <AboutMe />

/* <Contact /> */

//       </div>
//     );
//   }
// }

export default App;
