import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/component/app/App";
import * as serviceWorker from "./serviceWorker";
import "./scss/_.scss";

import { BrowserRouter as Router } from "react-router-dom";

// Select the element where your app will be mounted
const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Initial render: Render the App component wrapped with Router into the root
root.render(
  <Router>
    <App />
  </Router>
);

// Service Worker
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
