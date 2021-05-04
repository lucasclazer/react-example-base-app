import { Container, Typography } from "@material-ui/core";
import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import "fontsource-roboto";
import { validateCpf, validatePassword } from "./helpers/form-validation";
class App extends Component {
  _onSubmit = (form) => {
    console.log("form submited:", form);
  };

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" component="h1">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro
          onSubmit={this._onSubmit}
          validations={{ cpf: validateCpf, password: validatePassword }}
        />
      </Container>
    );
  }
}

export default App;
