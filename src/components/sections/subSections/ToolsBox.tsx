import React, { FunctionComponent } from "react";
import { Box, Tooltip } from "@mui/material";
import styled from "styled-components";

const Logo = styled.img`
  width: 3rem;
`;

const ToolsBox: FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "@media (min-width: 200px) and (max-width: 1023px)": {
          justifyContent: "center",
        },
      }}
    >
      <Tooltip title="Docker" arrow>
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
            src={require("../../../assets/skills/docker.png")}
            alt="Docker"
          />
        </Box>
      </Tooltip>
      <Tooltip title="Gulp" arrow>
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
          <Logo src={require("../../../assets/skills/gulp.png")} alt="Gulp" />
        </Box>
      </Tooltip>
      <Tooltip title="Webpack" arrow>
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
            src={require("../../../assets/skills/webpack.png")}
            alt="Webpack"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Git (Github)" arrow>
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
            src={require("../../../assets/skills/github.png")}
            alt="Git (Github)"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Npm" arrow>
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
            src={require("../../../assets/skills/npm.png")}
            alt="Npm"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Yarn" arrow>
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
            src={require("../../../assets/skills/yarn.png")}
            alt="Yarn"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Terminal" arrow>
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
            src={require("../../../assets/skills/terminal.png")}
            alt="Terminal"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="VS Code" arrow>
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
            src={require("../../../assets/skills/vscode.png")}
            alt="VS Code"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Jira" arrow>
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
            src={require("../../../assets/skills/jira.png")}
            alt="Jira"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Slack" arrow>
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
            src={require("../../../assets/skills/slack.png")}
            alt="Slack"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Figma" arrow>
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
            src={require("../../../assets/skills/figma.png")}
            alt="Figma"
            width={3}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Adobe XD" arrow>
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
            src={require("../../../assets/skills/adobe.png")}
            alt="Adobe XD"
            width={3}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default ToolsBox;
