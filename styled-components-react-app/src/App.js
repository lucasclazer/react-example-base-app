import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import ThemeSwitch from "./Components/ThemeSwitch/ThemeSwitch";
import { BtnTema } from "./Components/UI";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
function App() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <ThemeProvider theme={theme ? temaClaro : temaEscuro}>
        <BtnTema onClick={toggleTheme}>
          <ThemeSwitch theme={theme} />
        </BtnTema>
        <GlobalStyle />
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
