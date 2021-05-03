import { Button, TextField } from "@material-ui/core";
import React from "react";

export default function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="Endereço"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Finalizar Cadastro
      </Button>
    </form>
  );
}
