import React, { Component } from "react";
import "./Detail.css";
import moment from "moment";
import { withRouter } from "react-router";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Event List"
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.location.pathname.indexOf("detail") >= 0) {
      this.setState({
        title: "Event Detail"
      });
    } else {
      this.setState({
        title: "Event List"
      });
    }
  }
  render() {
    return (
      <header className="App-header">
        <h2 className="App-title">{this.state.title}</h2>
      </header>
    );
  }
}

export default withRouter(Header);
