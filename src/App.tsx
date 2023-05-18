import React from "react";
import "./css/App.css";
import Layout from "./layout/Layout";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroBanner from "./components/sections/HeroBanner";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3340FF", // very red
    },
    secondary: {
      main: "#00fff0", // very cyan
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <HeroBanner />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
