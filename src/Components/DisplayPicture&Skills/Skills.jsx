import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  const RepatedSkill = ({ percentage, skill }) => {
    return (
      <Stack display="flex" direction="row" width="100%">
        <Box sx={{ backgroundColor: "grey", width: "25%" }}>
          <Typography color="white" textAlign="center">
            {skill}
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            position: "relative",
            backgroundColor: "#262626",
            borderRadius: "4px",
            pr: 0.5,
            "&::after": {
              content: `""`,
              height: "100%",
              width: `${percentage - 5}%`,
              backgroundColor: "darkgrey",
              position: "absolute",
              top: 0,
              borderRadius: "0px 4px 4px 0px",
            },
          }}
        >
          <Typography color="white" textAlign="end">
            {percentage}%
          </Typography>
        </Box>
      </Stack>
    );
  };

  return (
    <Grid
      item
      xs={12}
      sm={4}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Stack display="flex" direction="column" width="100%" spacing={4}>
        <RepatedSkill skill="CSS" percentage={90} />
        <RepatedSkill skill="HTML" percentage={85} />
        <RepatedSkill skill="React" percentage={90} />
        <RepatedSkill skill="JS" percentage={90} />
        <RepatedSkill skill="NodeJs" percentage={75} />
        <RepatedSkill skill="UI/UX" percentage={65} />
        <RepatedSkill skill="MongoDB" percentage={70} />
      </Stack>
    </Grid>
  );
};

export default Skills;
