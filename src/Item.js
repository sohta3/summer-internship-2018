import React, { Component } from "react";
import "./Item.css";
import moment from "moment";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: [],
      isHide: false
    };
  }
  s;
  handleClickItem = () => {
    console.log("clicked!!!!");
    console.log(window.history.state);
    window.history.pushState(
      window.history.state,
      "",
      `/details/${this.props.id}`
    );
  };

  hide() {
    this.setState({ isHide: true });
  }

  render() {
    return (
      <Link to={`/detail/${this.props.id}`}>
        <li className="item">
          <div className="item-main">
            <div>
              <img
                className="avatar"
                src={this.props.actor.avatar_url}
                alt="{this.props.actor.display_login}"
              />
            </div>
            <div>
              <p className="display-login">
                <span>{this.props.actor.display_login}</span>
              </p>
              <p className="event">
                <span>{this.props.type}</span>
              </p>
            </div>
          </div>
          <div>
            <p className="created-at">
              {moment(this.props.created_at)
                .utc()
                .format("MM/DD HH:mm:ss")}
            </p>
          </div>
        </li>
      </Link>
    );
  }
}
