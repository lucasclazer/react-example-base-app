import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

export default function FormularioCadastro({ onSubmit, validateCpf }) {
  return (
    <>
      <DadosPessoais onSubmit={onSubmit} validateCpf={validateCpf} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}
