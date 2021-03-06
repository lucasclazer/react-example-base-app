import React, { Component } from "react";

export default class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.textArea = "";
  }

  _handleTitle = (e) => {
    this.title = e.target.value;
    e.stopPropagation();
    console.log("e.target.value", e.target.value);
  };

  _handleTextArea = (e) => {
    e.stopPropagation();
    this.textArea = e.target.value;
  };

  _createNote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.createNote && this.props.createNote(this.title, this.textArea, this.category);
  };

  render() {
    return (
      <form onSubmit={this._createNote}>
        <select>
          {this.props.categories &&
            this.props.categories.map((category) => (
              <option>{category.name}</option>
            ))}
        </select>
        <input type="text" placeholder="title" onChange={this._handleTitle} />
        <textarea
          type="text"
          rows={15}
          placeholder="Escreva a sua nota..."
          onChange={this._handleTextArea}
        />
        <button type="submit">Criar Nota</button>
      </form>
    );
  }
}
