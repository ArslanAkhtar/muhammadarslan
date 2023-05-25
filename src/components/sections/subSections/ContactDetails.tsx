import React, { FunctionComponent } from "react";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import { Typography, Box, Link } from "@mui/material";

const ContactDetails: FunctionComponent = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "secondary.main" }}
        >
          Have You Any Project? Please Drop a Message
        </Typography>
        <p>
          Get in touch and let me know how i can help. Fill out the form and
          i’ll be in touch as soon as possible.
        </p>
      </Box>
      <Box sx={{ display: "flex", marginTop: "10%" }}>
        <PhoneOutlined sx={{ marginRight: "20px" }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Phone:
          </Typography>

          <Link
            href="tel:+31623528222"
            underline="none"
            sx={{
              color: "#fff",
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            (31) 623528222
          </Link>
          <Link
            href="tel:+923194172656"
            underline="none"
            sx={{
              color: "#fff",
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            (92) 3194172656
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: "5%" }}>
        <EmailOutlined sx={{ marginRight: "20px" }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Email:
          </Typography>

          <Link
            href="mailto:info@muhammadarslan.com"
            underline="none"
            sx={{
              color: "#fff",
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            info@muhammadarslan.com
          </Link>
          <Link
            href="mailto:support@muhammadarslan.com"
            underline="none"
            sx={{
              color: "#fff",
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            support@muhammadarslan.com
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ContactDetails;
