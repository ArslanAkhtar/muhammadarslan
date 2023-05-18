import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
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
  flex: 1;
  padding: 10px;
  display: flex;
  align-items: center;
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
          <p>Align image and text in same line in html</p>
        </LeftSide>
      </Container>
    </VizSensor>
  );
};

export default About;
