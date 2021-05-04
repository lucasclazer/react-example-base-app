import React, { useContext, useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import ValidationsRegisterForms from "../context/ValidationsRegisterForms";
import useErrors from "../hooks/useErrors";

export default function DadosPessoais({ onSubmit }) {
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  
  const validations = useContext(ValidationsRegisterForms);
  
  const [errors, validateField, validateFields] = useErrors(validations);



  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validateFields())
          onSubmit({
            nome,
            sobrenome,
            cpf,
            promocoes,
            novidades,
          });
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={nome}
        required
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
      />
      <TextField
        id="cpf"
        name="cpf"
        variant="outlined"
        label="CPF"
        margin="normal"
        fullWidth
        value={cpf}
        error={errors.cpf}
        helperText={errors.cpf}
        required
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={validateField}
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            id="promocoes"
            name="promocoes"
            color="primary"
            checked={promocoes}
            onChange={(e) => setPromocoes(e.target.checked)}
          />
        }
      ></FormControlLabel>
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            id="novidades"
            name="novidades"
            color="primary"
            checked={novidades}
            onChange={(e) => setNovidades(e.target.checked)}
          />
        }
      ></FormControlLabel>

      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}
