import React, { useEffect, FunctionComponent, useRef } from "react";
import "./css/App.css";
import Layout from "./layout/Layout";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroBanner from "./components/sections/HeroBanner";
import Cards from "./components/sections/Cards";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import { useLocation } from "react-router-dom";

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

const App: FunctionComponent = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    let targetRef = null;

    switch (hash) {
      case "#home":
        targetRef = homeRef;
        break;
      case "#about":
        targetRef = aboutRef;
        break;
      case "#skills":
        targetRef = skillsRef;
        break;
      case "#experience":
        targetRef = expRef;
        break;
      case "#contact":
        targetRef = contactRef;
        break;
    }

    if (targetRef && targetRef.current) {
      targetRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <section id="home" ref={homeRef}>
          <HeroBanner />
        </section>
        <Cards />
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="skills" ref={skillsRef}>
          <Skills />
        </section>
        <section id="experience" ref={expRef}>
          <Experience />
        </section>
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
