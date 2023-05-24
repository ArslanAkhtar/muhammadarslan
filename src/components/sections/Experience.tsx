import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Container, Typography } from "@mui/material";
import VizSensor from "react-visibility-sensor";
import ExperienceTimeline from "./subSections/ExperienceTimeline";

const ContainerWrapperClass = {
  display: "flex",
  padding: "5% 0",
  minHeight: "65vh",
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

const Experience: FunctionComponent = () => {
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
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            12+ Years of Experience With Many Awards!
          </Typography>
          <p>
            I have been developing sites and apps for 12 years and i know for
            sure the main trends and directions of modern design, I have been a
            visionary and a reliable software engineering partner for
            world-class brands. You will get a decent result as you expect.
          </p>
        </RightSide>
        <LeftSide>
          <ExperienceTimeline />
        </LeftSide>
      </Container>
    </VizSensor>
  );
};

export default Experience;
