import React, { Component } from "react";
import "./card-nota.css";
export default class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3>{this.props.title}</h3>
        </header>
        <p>{this.props.text}</p>
        <button onClick={this.props.removeNote}>Delete</button>
      </section>
    );
  }
}
