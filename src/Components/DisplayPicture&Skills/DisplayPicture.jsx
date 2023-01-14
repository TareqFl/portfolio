import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import clouds from "../../Assets/clouds.jpg";
const DisplayPicture = () => {
  return (
    <Grid item xs={12} sm={6}>
      <Stack
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            img: { width: "50%", borderRadius: 4 },
          }}
        >
          <img src={clouds} alt="clouds" width="100%" />
        </Box>

        <Typography color="white" variant="h6" textAlign="center">
          Who's this guy?
        </Typography>
        <Typography color="white" textAlign="center">
          I'm a FullStack Developer in Turkeye, Istanbul. I have serious passion
          for developing web-applications, animations and creating intuitive,
          dynamic user experiences.
          <Link href="https://wa.me/qr/5FQNBTKC7SAWN1">
            Let's make something special.
          </Link>
        </Typography>
      </Stack>
    </Grid>
  );
};

export default DisplayPicture;
