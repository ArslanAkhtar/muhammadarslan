import React from "react";
import "./css/App.css";
import Layout from "./layout/Layout";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <div>Hi this is content area</div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
