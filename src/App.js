import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { List } from "./List";
import { Detail } from "./Detail";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/detail/:id" component={Detail} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
