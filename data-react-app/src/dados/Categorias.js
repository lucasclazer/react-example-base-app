export default class Categorias {
  constructor() {
    this.categorias = [];
    this._incritos = [];
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
  }

  inscrever(func) {
    this._incritos.push(func);
  }

  notificar() {
    this._incritos.forEach(func => func());
  }

  desincrever() {}

}
