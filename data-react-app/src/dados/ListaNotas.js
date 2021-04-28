import Nota from "./Nota.js";

export default class ListaNotas {
  constructor() {
    this.notas = [];
    this._incritos = [];
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    this.notificar();
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }

  inscrever(func) {
    this._incritos.push(func);
  }

  notificar() {
    this._incritos.forEach((func) => func(this.notas));
  }

  desincrever() {}
}
