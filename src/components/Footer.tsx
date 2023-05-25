import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Box, Link, Typography } from "@mui/material";
const FooterWrapper = styled.div`
  box-shadow: rgba(34, 34, 34, 0.1) 0px 0.125rem 0.3125rem;
  background: linear-gradient(45deg, rgb(34, 34, 34), rgb(42, 44, 46));
  padding: 20px 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "bold", color: "secondary.main", margin: "0px" }}
      >
        Muhammad Arslan
      </Typography>
      <Box>
        © 2023 Proudly Powered by:{" "}
        <Link
          href="https:www.muhammadarslan.com"
          underline="none"
          sx={{
            color: "secondary.main",
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          Muhammad Arslan
        </Link>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
