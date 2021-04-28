import Nota from "./Nota.js";

export default class ListaNotas {
  constructor() {
    this.notas = [];
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    this._incritos = [];
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
  }

  inscrever(func) {
    this._incritos.push(func);
  }

  notificar() {
    this._incritos.forEach((func) => func());
  }

  desincrever() {}
}
