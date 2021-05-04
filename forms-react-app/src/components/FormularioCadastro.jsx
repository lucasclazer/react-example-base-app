import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

export default function FormularioCadastro({ validations }) {
  const [actualStep, setActualStep] = useState(0);
  const [formData, setFormData] = useState({});

  console.log("validations", validations);

  useEffect(() => {
    console.log("FormData Changed:", formData);
  });

  const _nextStep = () => {
    setActualStep(actualStep + 1);
  };

  const _mergeFormData = (data) => {
    setFormData({ ...formData, ...data });
    _nextStep();
  };

  const forms = [
    <DadosUsuario onSubmit={_mergeFormData} />,
    <DadosPessoais onSubmit={_mergeFormData} />,
    <DadosEntrega onSubmit={_mergeFormData} />,
    <Typography variant="h5">Obrigado por se cadastrar!</Typography>,
  ];

  function getActualForm(step) {
    try {
      return forms[step];
    } catch (error) {
      return <Typography>Erro ao retornar formulário.</Typography>;
    }
  }

  return (
    <>
      <Stepper activeStep={actualStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {getActualForm(actualStep)}
    </>
  );
}
