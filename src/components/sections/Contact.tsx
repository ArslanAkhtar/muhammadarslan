import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import VizSensor from "react-visibility-sensor";
import Form from "./subSections/Form";
import ContactDetails from "./subSections/ContactDetails";
import { useLocation } from "react-router-dom";

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
          if (location.pathname !== "/#contact") {
            window.history.pushState(null, "", "/#contact");
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
