import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Container, Stack, Button, Typography } from "@mui/material";
import VizSensor from "react-visibility-sensor";
import ProfilePic from "../../assets/about/profilePic.jpg";

const ContainerWrapperClass = {
  display: "flex",
  padding: "5% 0",
};

const RightSide = styled.div`
  flex: 1;
  padding: 10px;
`;

const LeftSide = styled.div`
  flex: 1 1 0%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const About: FunctionComponent = () => {
  let [active, setActive] = useState(false);
  const containerRef = React.useRef(null);
  return (
    <VizSensor
      onChange={(isVisible: boolean) => {
        setActive(isVisible);
      }}
    >
      <Container sx={ContainerWrapperClass} ref={containerRef}>
        <RightSide>
          <img alt="profilePicture" src={ProfilePic} />
        </RightSide>
        <LeftSide>
          <Typography variant="h4" gutterBottom>
            Elevator Pitch
          </Typography>
          <p>
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
            <Button variant="contained">Hire Me</Button>
            <Button variant="outlined">Download CV</Button>
          </Stack>
        </LeftSide>
      </Container>
    </VizSensor>
  );
};

export default About;
