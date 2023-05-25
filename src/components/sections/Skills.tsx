import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import {
  Container,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import VizSensor from "react-visibility-sensor";

import SkillsBox from "./subSections/SkillsBox";
import ToolsBox from "./subSections/ToolsBox";

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
  flex: 1.2 1 0%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Skills: FunctionComponent = () => {
  let [active, setActive] = useState(false);
  const containerRef = React.useRef(null);

  const [alignment, setAlignment] = React.useState("skills");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: React.SetStateAction<string>
  ) => {
    setAlignment(newAlignment);
  };
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
            What My Programming Skills Included?
          </Typography>
          <p>
            I develop simple, intuitive and responsive user interface that helps
            users get things done with less effort and time with those
            technologies.
          </p>

          <Stack spacing={2} direction="row" ref={containerRef}>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="skills">Skills</ToggleButton>
              <ToggleButton value="tools">Tools</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </RightSide>
        <LeftSide>
          {alignment === "skills" ? <SkillsBox /> : <ToolsBox />}
        </LeftSide>
      </Container>
    </VizSensor>
  );
};

export default Skills;
