import React, { FunctionComponent } from "react";

import { Box, Paper, FormControl, TextField, Button } from "@mui/material";
import {
  AccountCircle,
  Email,
  Phone,
  Message,
  Send,
} from "@mui/icons-material";

const Form: FunctionComponent = () => {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          justifyContent: "space-around",
          padding: "5%",
        }}
      >
        <FormControl>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              required
              id="input-with-sx"
              label="Name"
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginTop: "20px" }}
          >
            <Email sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              required
              id="input-with-sx"
              label="Email"
              variant="standard"
              sx={{ width: "100%" }}
              helperText=""
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginTop: "20px" }}
          >
            <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              type="number"
              label="Phone"
              variant="standard"
              sx={{ width: "100%" }}
              helperText="Optional"
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginTop: "20px" }}
          >
            <Message sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              required
              id="input-with-sx"
              label="Message"
              variant="standard"
              multiline
              sx={{ width: "100%" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              margin: "40px  0px 20px 0px",
            }}
          >
            <Button
              variant="contained"
              endIcon={<Send />}
              sx={{ width: "100%" }}
            >
              Send
            </Button>
          </Box>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Form;
