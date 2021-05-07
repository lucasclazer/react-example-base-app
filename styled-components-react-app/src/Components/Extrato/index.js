import React from "react";
import { Botao, Box } from "../../Components/UI";
import { extratoLista } from "../../info";
import Items from "../Items/Items";

export default function Extrato() {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => (
        <Items id={id} type={type} from={from} value={value} date={date} />
      ))}
      <Botao>Ver Mais</Botao>
    </Box>
  );
}
