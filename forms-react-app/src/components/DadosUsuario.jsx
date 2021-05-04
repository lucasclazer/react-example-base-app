import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidationsRegisterForms from "../context/ValidationsRegisterForms";

export default function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ password: "" });
  const validations = useContext(ValidationsRegisterForms);

  const validateField = (e) => {
    const { name, value } = e.target;
    const validated = validations[name](value);
    const newErrors = { ...errors };
    newErrors[name] = validated;
    setErrors(newErrors);
    console.log("new Errors", newErrors);
  };

  const validateForm = () => {
    console.log("errors", errors);
    for (let field in errors) {
      if (errors[field]) {
        return false;
      }
    }
    return true;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validateForm()) {
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
