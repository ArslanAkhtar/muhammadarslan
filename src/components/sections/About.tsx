import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Container, Stack, Button, Typography } from "@mui/material";
import VizSensor from "react-visibility-sensor";
import ProfilePic from "../../assets/about/profilePic.jpg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";

const ContainerWrapperClass = {
  display: "flex",
  padding: "5% 0",
  "@media (min-width: 200px) and (max-width: 1023px)": {
    flexDirection: "column",
    alignItems: "center",
  },
};

const HeadingWrapperClass = {
  fontWeight: "bold",
  color: "secondary.main",
};

const RightSide = styled.div`
  flex: 1;
  padding: 10px;
`;

const LeftSide = styled.div`
  flex: 1 1 0%;
  padding: 5%;
  display: flex;
  flex-direction: column;
`;

const About: FunctionComponent = () => {
  let [active, setActive] = useState(false);
  const containerRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the URL when the section becomes visible
          if (location.pathname !== "/#about") {
            window.history.pushState(null, "", "/#about");
          }
        }
      });
    }, options);

    const currentSectionRef = containerRef.current; // Store current ref value in a variable

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [location]);

  const downloadPDF = () => {
    saveAs(require("../../download/MuhammadArslan.pdf"), "MuhammadArslan.pdf");
  };

  return (
    <VizSensor
      onChange={(isVisible: boolean) => {
        setActive(isVisible);
      }}
    >
      <Container sx={ContainerWrapperClass} ref={containerRef}>
        <RightSide>
          <img
            className="profile-picture"
            alt="profilePicture"
            src={ProfilePic}
          />
        </RightSide>
        <LeftSide>
          <Typography variant="h4" gutterBottom sx={HeadingWrapperClass}>
            Elevator Pitch
          </Typography>
          <p className="about-me">
            Hi! I'm Muhammad Arslan, and I am an experienced full-stack
            developer with over 10+ years of expertise in the field. I am
            proficient in front-end technologies such as React, Svelte, Vue.js,
            and the upcoming Nuxt.js 3, I create captivating and responsive user
            interfaces. On the back-end, I excel in serverless architecture,
            Node.js, and Express.js, which makes me develop scalable and
            efficient server-side solutions. I have a vast experience working on
            projects with global clients and diverse teams with a one-team model
            following agile methodologies like Sprint planning and Scrum which
            includes various tools e.g. Jira, Kanban model, Trello, Slack,
            Teams, Git versioning, and CI/CD pipelines. With a commitment to
            write clean code and a passion for continuous learning, I am
            dedicated to deliver high-quality software solutions. I believe in
            collaborative and detail-oriented team environment, I thrive to take
            on new challenges and exceeding client expectations. Connect with Me
            today to bring your project to life with my expertise.
          </p>

          <Stack spacing={2} direction="row" ref={containerRef}>
            <Button variant="contained" component={Link} to="/#contact">
              Hire Me
            </Button>
            <Button variant="outlined" onClick={downloadPDF}>
              Download CV
            </Button>
          </Stack>
        </LeftSide>
      </Container>
    </VizSensor>
  );
};

export default About;
