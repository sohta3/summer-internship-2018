import React, { Component } from "react";
import "./Detail.css";
import moment from "moment";

export class Detail extends Component {
  constructor(props) {
    super(props);
    const event = JSON.parse(localStorage.getItem(this.props.match.params.id));
    this.state = {
      id: event.id,
      type: event.type,
      actor: event.actor,
      created_at: event.created_at,
      repo: event.repo,
      payload: event.payload
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="detail">
        <div className="item-main">
          <div>
            <img
              className="avatar"
              src={this.state.actor.avatar_url}
              alt="{this.state.actor.display_login}"
            />
          </div>
          <div>
            <p className="display-login">
              <span>{this.state.actor.display_login}</span>
            </p>
            <p className="event">
              <span>{this.state.type}</span>
            </p>
          </div>
        </div>
        <div />
        <div className="info">
          <table>
            <tbody>
              <tr>
                <th>repo</th>
                <td>{this.state.repo.name}</td>
              </tr>
            </tbody>
            {Object.keys(this.state.payload)
              .filter(key => {
                return (
                  key !== "commits" && key !== "issue" && key !== "pull_request"
                );
              })
              .map(key => {
                return (
                  <tbody key={key}>
                    <tr>
                      <th>{key}</th>
                      <td>{this.state.payload[key]}</td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
        <div>
          <p className="created-at">
            {moment(this.props.created_at)
              .utc()
              .format("MM/DD HH:mm:ss")}
          </p>
        </div>
      </div>
    );
  }
}
