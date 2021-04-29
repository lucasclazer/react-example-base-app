import React from "react";
import { Button, TextField } from "@material-ui/core";

export default function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
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
      <TextField id="nome" label="Promoções" />
      <TextField id="nome" label="Novidades" />

      <Button type="submit" variant="contained" color="primary">
        Teste
      </Button>
    </form>
  );
}
