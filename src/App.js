import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
const App = () => {
  const threeFive = () => {
    let sum = 0;
    while (i < 1000) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
      i++;
    }
  };
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
