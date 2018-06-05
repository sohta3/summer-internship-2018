import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import { List } from "./List";
import { Detail } from "./Detail";
import { Page } from "./Page";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import TransitionGroup from "react-addons-css-transition-group"; // ES6

class PageSwitcher extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    console.log(props.location);
    this.state = {
      stack: [] // 各ページエレメントの格納場所です。
    };

    // 初期ページをプッシュします。
    this.state.stack.push(this.getPage(props.location));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.history.action === "POP") {
      this.state.stack.pop();
    }
    if (nextProps.history.action === "REPLACE") {
      this.state.stack.pop();
    }

    // this.onEntered(this.getPage(nextProps.location));
    this.state.stack.push(this.getPage(nextProps.location));
    const prevComponent = this.state.stack[this.state.stack.length - 2];
    console.log(prevComponent);
    // prevComponent.hide();
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getPage(location) {
    console.log(location);
    return (
      <Page onEntered={this.onEntered} onExited={this.onExited}>
        {React.createElement(this.props.appRoute, { location })}
      </Page>
    );
  }

  // 新規ページがプッシュされたら、前のページのcomponentDidHideをトリガーします。
  onEntered = component => {
    this.state.stack.push(component);
    const prevTopComponent = this.state.stack[this.state.stack.length - 2];
    console.log(prevTopComponent);
    if (prevTopComponent && prevTopComponent.componentDidHide) {
      prevTopComponent.componentDidHide();
    }
  };

  // ページがポップされたら、前のページのcomponentDidTopをトリガーします。
  onExited = component => {
    this.componentStack.splice(this.componentStack.indexOf(component), 1);
    const topComponent = this.componentStack[this.componentStack.length - 1];
    if (topComponent && topComponent.componentDidTop) {
      topComponent.componentDidTop();
    }
  };

  render() {
    return <div>{this.state.stack[this.state.stack.length - 1]}</div>;
  }
}

export default withRouter(PageSwitcher);
