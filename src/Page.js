import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import PageContext from "./PageContext";

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHide: false
    };
  }

  componentDidMount() {
    if (this.props.onEntered) {
      this.props.onEntered(this);
    }
  }

  componentWillUnmount() {
    if (this.props.onExited) {
      this.props.onExited(this);
    }
  }

  componentDidHide = () => {
    this.setState({ isHide: true });
  };

  componentDidTop = () => {
    this.setState({ isHide: false });
  };

  render() {
    return (
      <PageContext.Provider value={this.state}>
        <div>{this.props.children}</div>
      </PageContext.Provider>
    );
  }
}
