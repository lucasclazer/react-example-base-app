import React from "react";
import CardNota from "../CardNota/CardNota";

export default function ListaNotas() {
  return (
    <ul className="lista-notas">
      {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => (
        <li className="lista-notas--item" key={index}>
          <div>{categoria}</div>
          <CardNota />
        </li>
      ))}
    </ul>
  );
}
