import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaNotas from "./components/ListaNotas/ListaNotas";

export default class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaNotas />
      </section>
    );
  }
}
