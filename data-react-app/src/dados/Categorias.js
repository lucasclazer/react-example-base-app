export default class Categorias {
  constructor() {
    this.categorias = [];
    this._incritos = [];
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    console.log("Categoria nova adicionada", this.categorias);
    this.notificar();
  }

  inscrever(func) {
    this._incritos.push(func);
  }

  notificar() {
    this._incritos.forEach((func) => func(this.categorias));
  }

  desinscrever(func) {
    this._incritos = this._incritos.filter(f => f !== func);
  }
}
