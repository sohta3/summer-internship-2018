import React, { Component } from "react";
import "./Detail.css";
import Highlight from "react-highlight";

export class Detail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    if (typeof localStorage === "undefined" || localStorage === null) {
      this.state = {
        person: null
      };
    } else {
      const person = JSON.parse(
        localStorage.getItem(this.props.match.params.id)
      );
      this.state = {
        person: person
      };
    }
  }

  componentDidMount() {}

  render() {
    if (!this.state.person) {
      return <h1>...</h1>;
    }

    return (
      <article>
        <Highlight innerHTML={true}>
          {"html with multiple code snippets"}
        </Highlight>
        <h1>{this.state.person.name}</h1>
        <div>
          <label>height:</label>
          {this.state.person.height}
        </div>
        <div>
          <label>mass:</label>
          {this.state.person.mass}
        </div>
        <div>
          <label>hair_color:</label>
          {this.state.person.hair_color}
        </div>
        <div>
          <label>skin_color:</label>
          {this.state.person.skin_color}
        </div>
        <div>
          <label>eye_color:</label>
          {this.state.person.eye_color}
        </div>
        <div>
          <label>birth_year:</label>
          {this.state.person.birth_year}
        </div>
        <div>
          <label>gender:</label>
          {this.state.person.gender}
        </div>
      </article>
    );
    // return (
    //   <div className="detail">
    //     <div className="item-main">
    //       <div>
    //         <img
    //           className="avatar"
    //           src={this.state.actor.avatar_url}
    //           alt="{this.state.actor.display_login}"
    //         />
    //       </div>
    //       <div>
    //         <p className="display-login">
    //           <span>{this.state.actor.display_login}</span>
    //         </p>
    //         <p className="event">
    //           <span>{this.state.type}</span>
    //         </p>
    //       </div>
    //     </div>
    //     <div />
    //     <div className="info">
    //       <table>
    //         <tbody>
    //           <tr>
    //             <th>repo</th>
    //             <td>{this.state.repo.name}</td>
    //           </tr>
    //         </tbody>
    //         {Object.keys(this.state.payload)
    //           .filter(key => {
    //             return !this.state.payload[key] instanceof Object;
    //           })
    //           .map(key => {
    //             return (
    //               <tbody key={key}>
    //                 <tr>
    //                   <th>{key}</th>
    //                   <td>{this.state.payload[key]}</td>
    //                 </tr>
    //               </tbody>
    //             );
    //           })}
    //       </table>
    //     </div>
    //     <div>
    //       <p className="created-at">
    //         {moment(this.props.created_at)
    //           .utc()
    //           .format("MM/DD HH:mm:ss")}
    //       </p>
    //     </div>
    //   </div>
    // );
  }
}
