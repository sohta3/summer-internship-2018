import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { List } from "./List";
// import { Detail } from "./Detail";
import Loadable from "react-loadable";

function Loading() {
  return <div>Loading...</div>;
}

const List = Loadable({
  loader: () => import(/* webpackChunkName: "list" */ "./List"),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.List;
    return <Component />;
  }
});

const Detail = Loadable({
  loader: () => import(/* webpackChunkName: "detail" */ "./Detail"),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.Detail;
    return <Component {...props} />;
  }
});

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
