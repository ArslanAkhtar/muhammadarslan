import React, { FunctionComponent } from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

import styled from "styled-components";

import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import { Link } from "react-router-dom";

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
  minWidth: "120px",

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

const LinkWrapper = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Menu: FunctionComponent = () => {
  return (
    <MenuWrapper>
      <List sx={listStyle} component="nav" aria-label="LeftMenu">
        <LinkWrapper to="#home">
          <ListItem sx={listItemWrap}>
            <ListItemText primary="Home" sx={textStyle} />
            <CottageOutlinedIcon />
          </ListItem>
        </LinkWrapper>
        <Divider />
        <LinkWrapper to="#about">
          <ListItem divider sx={listItemWrap}>
            <ListItemText primary="About" sx={textStyle} />
            <AccountCircleIcon />
          </ListItem>
        </LinkWrapper>
        <LinkWrapper to="#skills">
          <ListItem sx={listItemWrap}>
            <ListItemText primary="Skills" sx={textStyle} />
            <PsychologyIcon />
          </ListItem>
        </LinkWrapper>
        <Divider light />
        <LinkWrapper to="#experience">
          <ListItem divider sx={listItemWrap}>
            <ListItemText primary="Experience" sx={textStyle} />
            <ManageAccountsIcon />
          </ListItem>
        </LinkWrapper>
        <Divider light />
        <LinkWrapper to="#contact">
          <ListItem sx={listItemWrap}>
            <ListItemText primary="Contact" sx={textStyle} />
            <ContactMailIcon />
          </ListItem>
        </LinkWrapper>
      </List>
    </MenuWrapper>
  );
};

export default Menu;
