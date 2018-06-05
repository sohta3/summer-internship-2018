import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import { List } from "./List";
import { Detail } from "./Detail";
import { PageSwitcher } from "./PageSwitcher";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Children } from "react";
import PropTypes from "prop-types";

export class Page extends Component {
  constructor(props) {
    super(props);
  }

  componentDidEnter = () => {
    if (this.props.onEntered) {
      this.props.onEntered(this);
    }
  };

  // use context to pass down refPage
  getChildContext() {
    return {
      refPage: c => {
        this.page = c;
      }
    };
  }

  hide = () => {
    console.log("hide");
  };

  componentDidHide() {
    console.log("hide");
  }

  render() {
    return React.Children.map(this.props.children, child => {
      // 各子要素をクローンしつつ newProps を渡す
      return React.cloneElement(child, this.props.onEntered);
    });
  }
}

Page.childContextTypes = {
  refPage: PropTypes.func
};
