import React, { FunctionComponent, useState } from "react";
import { Box, Stack, Typography, Container, Fade, Slide } from "@mui/material";
import styled from "styled-components";
import ExperienceIcon from "@mui/icons-material/LocalPolice";
import ProjectsIcon from "@mui/icons-material/BusinessCenter";
import AchievementsIcon from "@mui/icons-material/MilitaryTech";

import VizSensor from "react-visibility-sensor";

const containerWrapper = {
  paddingBottom: "40px",
  display: "flex",
  justifyContent: "center",
};

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconSize = {
  fontSize: "40px",
};

const Cards: FunctionComponent = () => {
  let [active, setActive] = useState(false);
  const containerRef = React.useRef(null);
  return (
    <VizSensor
      onChange={(isVisible: boolean) => {
        setActive(isVisible);
      }}
    >
      <Container sx={containerWrapper}>
        <Stack spacing={2} direction="row" ref={containerRef}>
          <Slide
            in={active}
            timeout={200}
            direction="left"
            container={containerRef.current}
          >
            <Box
              sx={{
                width: 300,
                height: 130,
                borderRadius: "10px",
                bgcolor: "#222",
                boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
                transition: "all 0.5s ease-in-out",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                  position: "relative",
                  bottom: "20px",
                },
              }}
            >
              <InnerContainer>
                <ExperienceIcon sx={IconSize} />
                <ContentContainer>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "secondary.main" }}
                  >
                    12+
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Years of Experience
                  </Typography>
                </ContentContainer>
              </InnerContainer>
            </Box>
          </Slide>
          <Fade in={active} timeout={1000}>
            <Box
              sx={{
                width: 300,
                height: 130,
                borderRadius: "10px",
                bgcolor: "#222",
                boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
                transition: "all 0.5s ease-in-out",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                  position: "relative",
                  bottom: "20px",
                },
              }}
            >
              <InnerContainer>
                <ProjectsIcon sx={IconSize} />
                <ContentContainer>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "secondary.main" }}
                  >
                    10+
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Completed Projects
                  </Typography>
                </ContentContainer>
              </InnerContainer>
            </Box>
          </Fade>
          <Slide
            in={active}
            timeout={200}
            direction="right"
            container={containerRef.current}
          >
            <Box
              sx={{
                width: 300,
                height: 130,
                borderRadius: "10px",
                bgcolor: "#222",
                boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
                transition: "all 0.5s ease-in-out",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                  position: "relative",
                  bottom: "20px",
                },
              }}
            >
              <InnerContainer>
                <AchievementsIcon sx={IconSize} />
                <ContentContainer>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "secondary.main" }}
                  >
                    3
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Performance Awards
                  </Typography>
                </ContentContainer>
              </InnerContainer>
            </Box>
          </Slide>
        </Stack>
      </Container>
    </VizSensor>
  );
};

export default Cards;
