import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

export default function FormularioCadastro({ onSubmit, validateCpf }) {
  const [actualStep, setActualStep] = useState(0);

  const _nextStep = () => {
    setActualStep(actualStep + 1);
  };

  const forms = [
    <DadosUsuario nextStep={_nextStep} />,
    <DadosPessoais
      nextStep={_nextStep}
      onSubmit={onSubmit}
      validateCpf={validateCpf}
    />,
    <DadosEntrega onSubmit={onSubmit} />,
  ];

  function getActualForm(step) {
    try {
      return forms[step];
    } catch (error) {
      return <Typography>Erro ao retornar formulário.</Typography>;
    }
  }

  return <>{getActualForm(actualStep)}</>;
}
