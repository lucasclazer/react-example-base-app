import { Button, TextField } from "@material-ui/core";
import React from "react";

export default function DadosUsuario({ nextStep }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
    >
      <TextField
        id="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="Senha"
        type="passowrd"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
