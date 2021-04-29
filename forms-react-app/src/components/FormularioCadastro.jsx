import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

export default function FormularioCadastro() {
  const [nome, setNome] = useState();

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
      />
      <TextField
        id="cpf"
        variant="outlined"
        label="CPF"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            id="promocoes"
            name="promocoes"
            color="primary"
            defaultChecked={true}
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
            defaultChecked={true}
          />
        }
      ></FormControlLabel>

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
