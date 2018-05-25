import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import { List } from "./List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Event List</h2>
        </header>
        <List />
      </div>
    );
  }
}

export default App;
