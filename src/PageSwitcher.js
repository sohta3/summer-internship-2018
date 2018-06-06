import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import { Page } from "./Page";
import { withRouter } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6

class PageSwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stack: [] // 各ページエレメントの格納場所です。
    };

    // 初期ページをプッシュします。
    this.state.stack.push(this.getPage(props.location));
  }

  componentStack = [];

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.history.action === "POP") {
      this.state.stack.pop();
      return;
    }
    if (nextProps.history.action === "REPLACE") {
      this.state.stack.pop();
      return;
    }

    this.state.stack.push(this.getPage(nextProps.location));
  }

  getPage(location) {
    return (
      <Page
        onEntered={this.onEntered}
        onExited={this.onExited}
        key={new Date().getTime()}
      >
        {React.createElement(this.props.appRoute, { location })}
      </Page>
    );
  }

  // 新規ページがプッシュされたら、前のページのcomponentDidHideをトリガーします。
  onEntered = component => {
    this.componentStack.push(component);
    const prevTopComponent = this.componentStack[
      this.componentStack.length - 2
    ];
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
    return <TransitionGroup>{this.state.stack}</TransitionGroup>;

    // return (
    //   <ReactCSSTransitionGroup
    //     transitionName="slide"
    //     transitionEnterTimeout={500}
    //     transitionLeaveTimeout={300}
    //   >
    //     {this.state.stack}
    //   </ReactCSSTransitionGroup>
    // );
  }
}

export default withRouter(PageSwitcher);
