import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

export default function FormularioCadastro({ onSubmit, validateCpf }) {
  const [actualStep, setActualStep] = useState(0);

  const forms = [

  ]
  const nextStep = () => {
    setActualStep(actualStep + 1);
  };


  function getActualForm(step) {
    switch (step) {
      case 0:
        return <DadosUsuario nextStep={nextStep} />;
      case 1:
        return 
          <DadosPessoais
            nextStep={nextStep}
            onSubmit={onSubmit}
            validateCpf={validateCpf}
          />
        ;
      case 2:
        return <DadosEntrega onSubmit={onSubmit} />;
      default:
        return <Typography>Erro ao retornar formulário.</Typography>;
    }
  }

  return <>{getActualForm(actualStep)}</>;
}
//
//<DadosPessoais onSubmit={onSubmit} validateCpf={validateCpf} />
// <DadosUsuario />
// <DadosEntrega />
