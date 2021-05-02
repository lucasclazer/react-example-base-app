import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

export default function FormularioCadastro() {
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [cpf, setCpf] = useState();
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={nome}
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
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
      />
      <TextField
        id="cpf"
        variant="outlined"
        label="CPF"
        margin="normal"
        fullWidth
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
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
        Cadastrar
      </Button>
    </form>
  );
}
