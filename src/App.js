import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaNotas from "./components/ListaNotas/ListaNotas";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  _createNote = (title, text) => {
    console.log("Note was created at view title:", title, "text", text);
    const newNotes = [...this.state.notes, { title: title, text: text }];
    this.setState({ notes: newNotes });
    console.log("this.state.notes", this.state.notes, "newNotes", newNotes);
  };

  _removeNote = (index) => {
    const notes = this.state.notes;
    notes.splice(index, 1);
    this.setState({ notes: [...notes] });
  };

  render() {
    return (
      <section>
        <FormularioCadastro createNote={this._createNote} />
        <ListaNotas notes={this.state.notes} removeNote={this._removeNote} />
      </section>
    );
  }
}
