import { Box, CssBaseline, Fade, Link, Typography } from "@mui/material";
import React from "react";
import "./App.css";
const App = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CssBaseline />
      <div id="moon"></div>
      <div id="earth"></div>

      <Fade in={true} timeout={1500}>
        <Box sx={{ position: "absolute", top: "25%", right: "15%" }}>
          <Typography variant="h6" color="#fff">
            Site is Currently Under Construction
          </Typography>

          <Link
            href=" https://github.com/TareqFl"
            display="list-item"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            GitHub
          </Link>
          <Link
            href="https://tareqfl.github.io/T-shirt-Generator/"
            display="list-item"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            Shirt Shack (Live Website)
          </Link>
          <Link
            href="https://tareqfl.github.io/Seat-Chart-Generator-New/"
            display="list-item"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            Concert Seat Chart Generator (Live Website)
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=UczVwMII5zM&t=4s"
            display="list-item"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            Stream Web App (old Video)
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=DwtvLMmZAvk&t=21s"
            display="list-item"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            E-commerce (Old Video)
          </Link>
        </Box>
      </Fade>
    </Box>
  );
};

export default App;
