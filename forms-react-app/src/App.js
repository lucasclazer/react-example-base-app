import { Container, Typography } from "@material-ui/core";
import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import "fontsource-roboto";
import { validateCpf, validatePassword } from "./helpers/form-validation";
import ValidationsRegisterForms from "./context/ValidationsRegisterForms";
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

        <ValidationsRegisterForms.Provider
          value={{ cpf: validateCpf, password: validatePassword }}
        >
          <FormularioCadastro onSubmit={this._onSubmit} />
        </ValidationsRegisterForms.Provider>
      </Container>
    );
  }
}

export default App;
