import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "./components/Button";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
        <Button />
      </Router>
    </Fragment>
  );
};

export default App;
