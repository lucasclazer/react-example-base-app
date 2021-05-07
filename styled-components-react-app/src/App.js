import React from "react";
import { ThemeProvider } from "styled-components";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { temaEscuro } from "./Components/UI/temas";
function App() {
  return (
    <>
      <ThemeProvider theme={temaEscuro}>

      <GlobalStyle />
      <Cabecalho />
      <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
