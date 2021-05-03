import { Button, TextField } from "@material-ui/core";
import React from "react";

export default function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="Senha"
        type="passowrd"
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
