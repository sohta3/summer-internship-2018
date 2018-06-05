import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import { List } from "./List";
import { Detail } from "./Detail";
import PageSwitcher from "./PageSwitcher";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// appRoute.js
function AppRoute(props) {
  return (
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <PageSwitcher appRoute={AppRoute} />
        {/* <div>
          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/detail" component={Detail} />
          </Switch>
        </div> */}
      </Router>
    );
  }
}

export default App;
