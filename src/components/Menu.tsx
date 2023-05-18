import React, { FunctionComponent } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import styled from "styled-components";

import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const listStyle = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "#222",
  transform: "translateY(-50%)",
  borderTopRightRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
  paddingTop: 0,
  paddingBottom: 0,

  "& :nth-of-type(1)": {
    "&:hover": {
      borderTopRightRadius: "0.5rem",
    },
  },

  "& .MuiListItem-root:last-child": {
    "&:hover": {
      borderBottomRightRadius: "0.5rem",
    },
  },
};

const textStyle = {
  display: "none",
  "&:hover": {
    display: "block",
  },
};

const listItemWrap = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around",

  minHeight: "73px",
  minWidth: "88px",

  "&:hover": {
    backgroundColor: "#3340FF",
    "& .MuiListItemText-root": {
      display: "block",
    },
  },
};

const MenuWrapper = styled.div`
  position: fixed;
  top: 50%;
`;

const Menu: FunctionComponent = () => {
  return (
    <MenuWrapper>
      <List sx={listStyle} component="nav" aria-label="LeftMenu">
        <ListItem button sx={listItemWrap}>
          <ListItemText primary="Home" sx={textStyle} />
          <CottageOutlinedIcon />
        </ListItem>
        <Divider />
        <ListItem button divider sx={listItemWrap}>
          <ListItemText primary="About" sx={textStyle} />
          <AccountCircleIcon />
        </ListItem>
        <ListItem button sx={listItemWrap}>
          <ListItemText primary="Skills" sx={textStyle} />
          <PsychologyIcon />
        </ListItem>
        <Divider light />
        <ListItem button sx={listItemWrap}>
          <ListItemText primary="Contact" sx={textStyle} />
          <ContactMailIcon />
        </ListItem>
      </List>
    </MenuWrapper>
  );
};

export default Menu;
