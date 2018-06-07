import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

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

  historyBack() {
    window.history.back();
  }

  render() {
    return (
      <header className="App-header">
        <div className="header-container">
          {this.props.location.pathname.indexOf("/detail") >= 0 ? (
            <span onClick={this.historyBack}>
              <img className="back" src="/arrowbackbutton_79955.png" />
            </span>
          ) : (
            ""
          )}
          <h2 className="App-title">{this.state.title}</h2>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
