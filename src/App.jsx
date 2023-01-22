import {
  GitHub,
  Home,
  Instagram,
  Lightbulb,
  LinkedIn,
  Person,
  Phonelink,
  RocketLaunch,
  Speed,
} from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import InfoCard from "./Components/InfoCard/InfoCard";
import ProjectCard from "./Components/ProjectCards/ProjectCard";
import * as style from "./styles";
import sandbox from "./Assets/sandbox.png";
import shirtShack from "./Assets/shirtShack.png";
import seat from "./Assets/seatGen.png";
import stream from "./Assets/stream.png";
import wtsp from "./Assets/whatsap.png";
import ec from "./Assets/e-commerve.png";
import Aboutme from "./Components/AboutMe/Aboutme";
import DisplayPicture from "./Components/DisplayPicture&Skills/DisplayPicture";
import Skills from "./Components/DisplayPicture&Skills/Skills";
const App = () => {
  const RepeatedSocialIcons = ({ icon, onClick }) => {
    return (
      <IconButton className="iconButton" size="small" onClick={onClick}>
        {icon}
      </IconButton>
    );
  };

  const RepeatedTags = ({ text }) => {
    return (
      <Grid item>
        <Box className="TagsContainer">
          <Typography className="Tags">{text}</Typography>
        </Box>
      </Grid>
    );
  };

  return (
    <Box sx={{ ...style.container }}>
      <CssBaseline />
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Paper sx={{ ...style.paper }}>
          <Stack
            display="flex"
            direction="row"
            className="homePage"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="white" className="homeText">
              Home Page
            </Typography>
            <IconButton className="homeIconButton" size="small">
              <Home className="homeIcon" />
            </IconButton>
          </Stack>
        </Paper>

        <Stack direction="row" spacing={1} className="socialIcons">
          <RepeatedSocialIcons
            icon={<GitHub className="socialIcon" sx={{ color: "white" }} />}
            onClick={() => window.open("https://github.com/TareqFl")}
          />
          <RepeatedSocialIcons
            onClick={() =>
              window.open("https://www.instagram.com/tarekfleifl/")
            }
            icon={<Instagram className="socialIcon" sx={{ color: "white" }} />}
          />
          <RepeatedSocialIcons
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/tareq-fleifel-809900107/"
              )
            }
            icon={<LinkedIn className="socialIcon" sx={{ color: "white" }} />}
          />
        </Stack>
        <IconButton className="menu">
          <Box className="menuText">
            <Typography color="white" component={"h6"}>
              Menu
            </Typography>
          </Box>
        </IconButton>
      </Stack>
      <InfoCard />
      <Grid container gap={1}>
        <RepeatedTags text="FullStack Developer" />
        <RepeatedTags text="FrontEnd Engineer" />
        <RepeatedTags text="BackEnd Engineer" />
      </Grid>
      <Grid container sx={{ transition: "1s" }}>
        <ProjectCard
          status="Sandbox"
          title="Text Animation"
          src={sandbox}
          info={"Nav Bar Animations"}
          bgColor="transparent"
          buttonColor="#ffd283"
          shadow="ffd283"
          onClick={() => window.open("https://codesandbox.io/u/TareqFl")}
        />

        <ProjectCard
          status="live Website"
          title={"Custom T-Shirt Generator"}
          src={shirtShack}
          info={
            "Make your own Custom tshirt,integrating with payment system and the app is ready to go."
          }
          bgColor="transparent"
          buttonColor="darkorange"
          shadow="black"
          onClick={() =>
            window.open("https://tareqfl.github.io/T-shirt-Generator/")
          }
        />
        <ProjectCard
          status="Video"
          title={"Stream"}
          src={stream}
          info={
            "Streaming platform inspired by twitch and youtube.using Google Outh2 authentication."
          }
          bgColor="transparent"
          shadow="#99154E"
          buttonColor="#99154E"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=UczVwMII5zM&t=4s")
          }
        />
        <ProjectCard
          status="live Website"
          title={"Seat Chart Generator"}
          src={seat}
          info={
            "A seat chart generator for theaters or concerts  with the ability to price and to divide by sections."
          }
          bgColor="transparent"
          buttonColor="#FFAB4C"
          shadow="#FFAB4C"
          onClick={() =>
            window.open("https://tareqfl.github.io/Seat-Chart-Generator-New/")
          }
        />

        <ProjectCard
          status="live Website"
          title={"WhatsApp Desktop clone"}
          src={wtsp}
          info={"A dummy Whatsapp desktop application clone,because why not?"}
          bgColor="transparent"
          buttonColor="#9CC094"
          shadow="#9CC094"
          onClick={() =>
            window.open("https://tareqfl.github.io/WhatsApp-Desktop-clone/")
          }
        />

        <ProjectCard
          status="Video"
          title={"E-commerce"}
          src={ec}
          info={
            "A fully integrated E-commerce website with stripe payment and authentication."
          }
          bgColor="black"
          shadow="#FFEEAD"
          buttonColor="white"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=DwtvLMmZAvk&t=21s")
          }
        />
      </Grid>

      <Paper sx={{ ...style.paper }}>
        <Stack
          display="flex"
          direction="row"
          className="homePage"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography color="white" className="homeText">
            About
          </Typography>
          <IconButton className="homeIconButton" size="small">
            <Person className="homeIcon" />
          </IconButton>
        </Stack>
      </Paper>
      <Grid
        container
        gap={2}
        sx={{ justifyContent: "center", alignItems: "center", width: "100%" }}
      >
        <Aboutme
          bgColor="#c54444"
          icon={<Speed sx={{ fontSize: { xs: "2rem", sm: "2rem" } }} />}
          typography="Speed"
        />
        <Aboutme
          bgColor="#dfb921"
          icon={<Lightbulb />}
          typography="intuitive"
        />
        <Aboutme
          bgColor="#839292"
          icon={<Phonelink />}
          typography="Responsive"
        />
        <Aboutme
          bgColor="#9a82c2"
          icon={<RocketLaunch />}
          typography="Dynamic"
        />
      </Grid>
      <Grid container gap={4} sx={{ p: 1 }}>
        <DisplayPicture />
        <Skills />
      </Grid>
      <Divider sx={{ backgroundColor: "white" }} />
    </Box>
  );
};

export default App;
