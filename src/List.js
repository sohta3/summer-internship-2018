import React, { Component } from "react";
import { Item } from "./Item";
import "./List.css";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/events")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            events: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { events } = this.state;

    return (
      <ul className="list">
        {events.map(event => (
          <Item
            key={event.id}
            type={event.type}
            actor={event.actor}
            created_at={event.created_at}
          />
        ))}
      </ul>
    );
  }
}
