import React, { Component } from "react";
import "./Item.css";
import moment from "moment";

export class Item extends Component {
  render() {
    return (
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
    );
  }
}
