import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gear from "./components/pages/Gear";
import Home from "./components/pages/Home";
import Indoor from "./components/pages/Indoor";
import Outdoor from "./components/pages/Outdoor";
import Signup from "./components/pages/Signup";
const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/indoor" component={Indoor} />
          <Route path="/outdoor" component={Outdoor} />
          <Route path="/gear" component={Gear} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
