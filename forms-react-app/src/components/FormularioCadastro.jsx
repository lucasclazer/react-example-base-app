import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

export default function FormularioCadastro({ onSubmit, validateCpf }) {
  const [actualStep, setActualStep] = useState(0);
  const [formData, setFormData] = useState({});



  
  const _nextStep = () => {
    setActualStep(actualStep + 1);
  };

  const _mergeFormData = (data) => {
    console.log("Data Colected data from form:", data);
    setFormData({ ...formData, ...data });
    console.log("Colected data from form:", formData);
    _nextStep();
  };

  const forms = [
    <DadosUsuario onSubmit={_mergeFormData} />,
    <DadosPessoais onSubmit={_mergeFormData} validateCpf={validateCpf} />,
    <DadosEntrega onSubmit={_mergeFormData} />,
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
