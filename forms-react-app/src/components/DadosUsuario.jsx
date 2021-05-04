import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidationsRegisterForms from "../context/ValidationsRegisterForms";
import useErrors from "../hooks/useErrors";

export default function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(ValidationsRegisterForms);

  const [errors, validateField, validateFields] = useErrors(validations);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validateFields()) {
          onSubmit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        id="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        error={errors.password}
        helperText={errors.password}
        onBlur={validateField}
        id="password"
        name="password"
        label="Password"
        type="password"
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
