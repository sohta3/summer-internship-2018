import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import { List } from "./List";
import { Detail } from "./Detail";
import PageSwitcher from "./PageSwitcher";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// appRoute.js
function AppRoute(props) {
  return (
    <Switch location={props.location}>
      <Route exact path="/" component={List} />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <PageSwitcher appRoute={AppRoute} />
      </Router>
    );
  }
}

export default App;
