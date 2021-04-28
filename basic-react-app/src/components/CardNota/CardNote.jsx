import React, { Component } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import "./card-nota.css";

export default class CardNote extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3>{this.props.title}</h3>
          <h4>{this.props.categoryName}</h4>
        </header>
        <p>{this.props.text}</p>
        <button onClick={this.props.removeNote}>
          <DeleteIcon /> Delete
        </button>
      </section>
    );
  }
}
