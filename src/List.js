import React, { Component } from "react";
import { Item } from "./Item";
import "./List.css";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: [],
      isHide: false
    };
  }

  componentDidMount() {
    // const events = [
    //   {
    //     id: 1,
    //     type: "push",
    //     actor: {
    //       display_login: "hoge",
    //       avatar_url:
    //         "http://www.yutori528.com/wp-content/uploads/2017/09/DSC_8541.jpg"
    //     },
    //     created_at: Date.now().toString()
    //   },
    //   {
    //     id: 2,
    //     type: "push",
    //     actor: {
    //       display_login: "hoge",
    //       avatar_url:
    //         "http://www.yutori528.com/wp-content/uploads/2017/09/DSC_8541.jpg"
    //     },
    //     created_at: Date.now().toString()
    //   },
    //   {
    //     id: 3,
    //     type: "push",
    //     actor: {
    //       display_login: "hoge",
    //       avatar_url:
    //         "http://www.yutori528.com/wp-content/uploads/2017/09/DSC_8541.jpg"
    //     },
    //     created_at: Date.now().toString()
    //   }
    // ];

    // this.setState({
    //   isLoaded: true,
    //   events: events
    // });

    fetch("https://api.github.com/events")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            events: result
          });
          // result.forEach(element => {
          //   localStorage.setItem(element.id, JSON.stringify(element));
          // });
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

  hide() {
    this.setState({ isHide: true });
  }

  render() {
    const { events } = this.state;

    return (
      <ul className="list {this.state.isHide ? 'hidden' : '' }">
        {events.map(event => (
          <Item
            key={event.id}
            id={event.id}
            type={event.type}
            actor={event.actor}
            created_at={event.created_at}
          />
        ))}
      </ul>
    );
  }
}
