import { Container, Typography } from "@material-ui/core";
import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import "fontsource-roboto";
class App extends Component {
  _onSubmit = (form) => {
    console.log("form submited:", form);
  };

  _validateCpf = (cpf) => {
    if (cpf && cpf.length !== 11) {
      return "Cpf deve ter 11 digitos";
    } else {
      return;
    }
  };

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" component="h1">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro
          onSubmit={this._onSubmit}
          validateCpf={this._validateCpf}
        />
      </Container>
    );
  }
}

export default App;
