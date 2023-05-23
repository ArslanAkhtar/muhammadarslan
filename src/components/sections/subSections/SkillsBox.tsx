import React, { FunctionComponent } from "react";
import { Box, Tooltip } from "@mui/material";
import styled from "styled-components";

const Logo = styled.img`
  width: 3rem;
`;

const SkillsBox: FunctionComponent = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Tooltip title="HTML5" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo src={require("../../../assets/skills/html5.png")} alt="HTML5" />
        </Box>
      </Tooltip>
      <Tooltip title="CSS3" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo src={require("../../../assets/skills/css3.png")} alt="HTML5" />
        </Box>
      </Tooltip>
      <Tooltip title="SASS" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/sass.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="JavaScript" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/javascript.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="TypeScript" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/typescript.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="React" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/react.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Vue" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/vue.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Svelte" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/svelte.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Nuxt 3" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/nuxt.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Ghost" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/ghost.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Wordpress" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/wordpress.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="AWS" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/aws.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="NodeJS" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/nodejs.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Serverless" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/serverless.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="MongoDB" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/mongo.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="PostgreSQL" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/postgresql.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="MySQL" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/mysql.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Cypress" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/cypress.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Jest" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/jest.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="React testing library" arrow>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5rem",
            width: "5rem",
            margin: "0 0.5rem 1rem",
            cursor: "help",
            borderRadius: "10px",
            bgcolor: "#222",
            boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
            transition: "all 1s ease-in",
            "&:hover": {},
          }}
        >
          <Logo
            src={require("../../../assets/skills/rtl.png")}
            alt="HTML5"
            width={3}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default SkillsBox;
