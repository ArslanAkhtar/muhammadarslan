import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import VizSensor from "react-visibility-sensor";
import Form from "./subSections/Form";
import ContactDetails from "./subSections/ContactDetails";

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

const Contact: FunctionComponent = () => {
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
          <ContactDetails />
        </RightSide>
        <LeftSide>
          <Form />
        </LeftSide>
      </Container>
    </VizSensor>
  );
};

export default Contact;
