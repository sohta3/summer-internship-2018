import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

function Loading() {
  return <div>Loading...</div>;
}

const List = Loadable({
  loader: () => import(/* webpackChunkName: "list" */ "./List"),
  modules: ["list"],
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.List;
    return <Component />;
  }
});

const Detail = Loadable({
  loader: () => import(/* webpackChunkName: "detail" */ "./Detail"),
  modules: ["detail"],
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.Detail;
    return <Component {...props} />;
  }
});

const NotFound = () => (
  <div>
    <h1>Sorry, can’t find that.</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/detail/:id" component={Detail} />} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
