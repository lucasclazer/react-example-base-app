import { Container, Typography } from "@material-ui/core";
import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import "fontsource-roboto";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" component="h1">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
