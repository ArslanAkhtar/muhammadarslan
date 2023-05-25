import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import { ReactComponent as TextSVG } from "../../assets/heroBanner/eng.svg";
import Button from "@mui/material/Button";

const ContainerWrapperClass = {
  height: "100vh",
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`;
const ImageContainer = styled.div`
  width: 55%;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
`;

const HeroBanner: FunctionComponent = () => {
  return (
    <Container sx={ContainerWrapperClass}>
      <ContentWrapper>
        <ImageContainer>
          <TextSVG />
        </ImageContainer>
        <Title>
          Hi, I'm Muhammad Arslan I am a Senior Front-end Consultant, Developer,
          and a Web Expert.
        </Title>
        <Button variant="contained" size="large">
          Get In Touch
        </Button>
      </ContentWrapper>
    </Container>
  );
};

export default HeroBanner;
