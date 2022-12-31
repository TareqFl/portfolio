import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";

const Run = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "black",
          boxShadow: "0px 0px 5px 4px purple, inset 0px 0px 5px 4px purple",
          borderRadius: "12px",
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#FDA8FF",
            position: "relative",
            WebkitTextStroke: "2px #9C09A1",
            "&:hover": {
              cursor: "pointer",
            },
            textAlign: "center",

            transition: "1s",
          }}
        >
          文件夹
        </Typography>
      </Box>
    </Box>
  );
};

export default Run;
