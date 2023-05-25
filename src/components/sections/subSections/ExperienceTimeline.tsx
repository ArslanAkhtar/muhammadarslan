import React, { FunctionComponent } from "react";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import { Typography } from "@mui/material";

const ExperienceTimeline: FunctionComponent = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2014
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Itchy Fingers (Netsol)
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Game Developer
          </Typography>
          <p>
            As a Game Developer Muhammad was part of the team that developed
            Blocky Athletes. It is an 80's style mobile sports game that lets
            you compete with your friends in the best 8-bit blocky style arcade
            based tournaments. The game was fully developer in Unity3D
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            WRLD3D (Netsol)
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Front-End Developer
          </Typography>
          <p>
            Monitored technical aspects of the front-end delivery for projects.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Tenant (Strategic Systems International)
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Senior Frontend Developer
          </Typography>
          <p>
            Designed and developed the Property Management Portal. The portal
            was built using Vue and NodeJs. Muhammad was responsible for
            building front-end components as well as back-end APIs. He also took
            it upon himself to build BI reports
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Benzinga (Strategic Systems International)
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Senior Frontend Developer
          </Typography>
          <p>
            Built high-quality well tested React Components for a Stock
            Management Application. He also sometimes took the role as Architect
            and architected/designed some features of the application
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            CryptoFi (Strategic Systems International)
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Senior Developer / Team Lead
          </Typography>
          <p>
            Responsible for the realization of a Leasing application for a
            Crypto FinTech company. As front-end developer I was mainly
            responsible for making high-quality front-end components and For
            user management AWS Amplify and AWS Cognito was used.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Neustreet (Strategic Systems International)
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Development Lead
          </Typography>
          <p>
            Development of a NFT Property Management system developed making use
            of the latest technologies; Vue3, Svelte, Serverless and the Ghost
            CMS. Besides creating various MVPs, defining the project structure
            and introduce blogging capabilities I was later also responsible for
            leading the development team of 15 people and was communicating
            directly with the client.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            VNO (IO Digital)
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            Senior Frontend Developer
          </Typography>
          <p>
            As a senior front-end developer, I initiated this project with the
            responsibility of crafting dynamic components on dynamic web pages,
            which are populated with data retrieved via a GraphQL query. Also
            wrote some unit test cases for the dynamic components using jest and
            vite-test.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default ExperienceTimeline;
