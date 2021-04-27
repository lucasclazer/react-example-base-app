import React from "react";
import CardNote from "../CardNota/CardNote";

export default function ListaNotas(props) {
  return (
    <ul className="lista-notas">
      {props.notes &&
        props.notes.map((note, index) => (
          <li className="lista-notas--item" key={index}>
            {/* <div>{note}</div> */}
            <CardNote
              title={note.title}
              text={note.text}
              removeNote={() => props.removeNote && props.removeNote(index)}
            />
          </li>
        ))}
    </ul>
  );
}
