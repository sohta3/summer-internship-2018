import React, { Component } from "react";
import "./Item.css";

export class Item extends Component {
  render() {
    return (
      <li className="item">
        <div>
          <img className="avatar" src={this.props.actor.avatar_url} />
        </div>

        <div>{this.props.type}</div>
      </li>
    );
  }
}
