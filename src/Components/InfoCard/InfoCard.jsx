import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import * as style from "./styles";
import bg2 from "../../Assets/nobg3.png";
import { Computer } from "@mui/icons-material";
const InfoCard = () => {
  const [viewed, setViewed] = React.useState({
    name: "myNamex",
    name2: "myName2x",
    avatar2: "avatar2x",
    avatar: "avatarx",
  });
  const { name, name2, avatar2, avatar } = viewed;
  React.useEffect(() => {
    setTimeout(
      () =>
        setViewed({
          name: "myName",
          name2: "myName2",
          avatar2: "avatar2",
          avatar: "avatar",
        }),
      350
    );
  }, []);
  return (
    <Paper sx={{ ...style.container }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} className="avatarContainer">
          <Avatar className={avatar} src={bg2} />
          <Typography className={name2}>Tareq Fleyfel</Typography>
          <Box className="roleContainer2">
            <Typography className="roleText">Software Engineer</Typography>
            <IconButton className="roleButton" size="small">
              <Computer className="roleIcon" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="nameContainer">
          <Avatar className={avatar2} src={bg2} />
          <Typography className={name}>Tareq Fleyfel</Typography>
          <Box className="roleContainer">
            <Typography className="roleText">Software Engineer</Typography>
            <IconButton className="roleButton" size="small">
              <Computer className="roleIcon" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InfoCard;
