import React from "react";
import CardNota from "../CardNota/CardNota";

export default function ListaNotas(props) {
  return (
    <ul className="lista-notas">
      {props.notes &&
        props.notes.map((note, index) => (
          <li className="lista-notas--item" key={index}>
            {/* <div>{note}</div> */}
            <CardNota
              title={note.title}
              text={note.text}
              removeNote={() => props.removeNote && props.removeNote(index)}
            />
          </li>
        ))}
    </ul>
  );
}
