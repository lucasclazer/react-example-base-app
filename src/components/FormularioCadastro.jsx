import React, { Component } from "react";

export default class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea type="text" rows={15} placeholder="Escreva a sua nota..." />
        <button type="submit">Criar Nota</button>
      </form>
    );
  }
}
