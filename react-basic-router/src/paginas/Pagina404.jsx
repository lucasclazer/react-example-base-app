import React from "react";
import image from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

export default function Pagina404() {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={image} alt="Ilustração doguito" />
      <p className="naoencontrado-texto">Ops, esta página não existe!</p>
    </main>
  );
}
