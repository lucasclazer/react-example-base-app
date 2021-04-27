import React, { Component } from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaNotas from "./components/ListaNotas/ListaNotas";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categories: [],
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

  _addCategory = (name) => {
    const newCategories = [...this.state.categories, { name: name }];
    this.setState({ categories: newCategories });
  };

  render() {
    return (
      <section>
        <FormularioCadastro createNote={this._createNote} />
        <CategoryList
          categories={this.state.categories}
          addCategory={this._addCategory}
        />
        <ListaNotas notes={this.state.notes} removeNote={this._removeNote} />
      </section>
    );
  }
}
