import React, { Component } from "react";

export default class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea type="text" placeholder="Escreva a sua nota..." />
        <button>Criar Nota</button>
      </form>
    );
  }
}
