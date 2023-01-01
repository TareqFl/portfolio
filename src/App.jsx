import { Box, CssBaseline, Fade, Link, Typography } from "@mui/material";
import React from "react";
import "./App.css";
const App = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CssBaseline />
      <Box
        id="moon"
        sx={{
          top: "25%",
          left: { xs: "5%", sm: "25%" },
          position: "absolute",
        }}
      ></Box>
      <Box
        id="earth"
        sx={{
          height: "300px",
          width: "300px",
          borderRadius: "50%",
          boxShadow: "inset 0px -125px 50px 15px black",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 2,
        }}
      ></Box>

      <Box
        id="sun"
        sx={{
          height: "125px",
          width: "125px",
          borderRadius: "50%",

          boxShadow:
            "0px 0px 500px 50px darkorange,inset 0px 0px 70px 7px darkorange",
          position: "absolute",
          top: "25%",
          left: "60%",
          zIndex: 0,

          // "&:hover": {
          //   transform: "scale(1.5)",
          //   cursor: "pointer",
          //   left: "59%",
          // },
          transition: "all 10s",
        }}
      ></Box>

      <Fade in={true} timeout={1500}>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "50%", sm: "25%" },
            right: { xs: "10%", sm: "15%" },
            zIndex: 2,
          }}
        >
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
              "&:hover": {
                letterSpacing: "4px",

                WebkitTextStroke: "1px darkorange",
                color: "gold",
                ml: 2,
              },
              transition: "all 1s",
            }}
          >
            GitHub
          </Link>
          <Link
            href="https://tareqfl.github.io/WhatsApp-Desktop-clone/"
            display="list-item"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              mt: 2,
              "&:hover": {
                letterSpacing: "2px",

                WebkitTextStroke: "1px darkorange",
                color: "gold",
                ml: 2,
              },
              transition: "all 1s",
            }}
          >
            WhatsApp (Desktop clone)
          </Link>
          <Link
            href="https://tareqfl.github.io/T-shirt-Generator/"
            display="list-item"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              mt: 2,
              "&:hover": {
                letterSpacing: "2px",

                WebkitTextStroke: "1px darkorange",
                color: "gold",
                ml: 2,
              },
              transition: "all 1s",
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
              "&:hover": {
                letterSpacing: "1px",
                WebkitTextStroke: "1px darkorange",
                ml: 2,
                color: "gold",
              },
              transition: "all 1s",
            }}
          >
            Seat Chart Generator (Live Website)
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=UczVwMII5zM&t=4s"
            display="list-item"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              mt: 2,
              "&:hover": {
                letterSpacing: "2px",
                WebkitTextStroke: "1px darkorange",
                color: "gold",
                ml: 2,
              },
              transition: "all 1s",
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
              "&:hover": {
                letterSpacing: "2px",
                WebkitTextStroke: "1px darkorange",
                color: "gold",
                ml: 2,
              },
              transition: "all 1s",
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
