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
  return (
    <Paper sx={{ ...style.container }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} className="avatarContainer">
          <Avatar className="avatar" src={bg2} />
          <Typography className="myName2">Tareq Fleyfel</Typography>
          <Box className="roleContainer2">
            <Typography className="roleText">Software Engineer</Typography>
            <IconButton className="roleButton" size="small">
              <Computer className="roleIcon" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="nameContainer">
          <Avatar className="avatar2" src={bg2} />
          <Typography className="myName">Tareq Fleyfel</Typography>
          <Box className="roleContainer">
            <Typography className="roleText">Software Engineer</Typography>
            <IconButton className="roleButton" size="small">
              <Computer className="roleIcon" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Paper>
  );
};

export default InfoCard;
