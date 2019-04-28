import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainMenu from "../mainmenu";
import App from "../app/App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainMenu} />
    </Switch>
  </BrowserRouter>
);
export default Router;
