import { Box, Grid, Typography } from "@mui/material";
import React from "react";
const Aboutme = ({ bgColor, typography, icon }) => {
  return (
    <Grid
      item
      xs={2}
      sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "85%", md: "65%", lg: "45%", xl: "40%" },
          height: { xs: "50px", sm: "100px" },
          borderRadius: 50,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bgColor,
        }}
      >
        {icon}
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "0.5rem", sm: "1rem" },
          }}
        >
          {typography}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Aboutme;
