import React from "react";
import "./css/App.css";
import Layout from "./layout/Layout";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroBanner from "./components/sections/HeroBanner";
import Cards from "./components/sections/Cards";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3340FF", // very red
    },
    secondary: {
      main: "#ea7719", // very cyan
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <HeroBanner />
        <Cards />
        <About />
        <Skills />
        <Experience />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
