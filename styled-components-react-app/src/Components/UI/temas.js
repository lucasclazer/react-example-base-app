import {
  fundoClaro,
  textoFundoClaro,
  conteudoClaro,
  fundEscuro,
  conteudoEscuro,
  textoFundoEscuro,
} from "./variables";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
};

export const temaEscuro = {
  body: fundEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)"
};


