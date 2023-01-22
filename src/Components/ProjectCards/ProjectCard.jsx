import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import * as styles from "./styles";
const ProjectCard = ({
  status,
  title,
  info,
  onClick,
  src,
  bgColor,
  buttonColor,
  shadow,
}) => {
  const [arrows, setArrows] = React.useState({
    arrow1: styles.arrow1,
    arrow2: styles.arrow2,
    bg: "transparent",
    bgtext: "white",
  });
  const { arrow1, arrow2, bg, bgtext } = arrows;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ...styles.container }}>
      <Paper
        className="stack"
        sx={{
          backgroundColor: bgColor,
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={onClick}
        onMouseEnter={() =>
          setArrows({
            arrow1: styles.arrow1Hover,
            arrow2: styles.arrow2Hover,
            bg: "white",
            bgtext: "black",
          })
        }
        onMouseLeave={() =>
          setArrows({
            arrow1: styles.arrow1,
            arrow2: styles.arrow2,
            bg: "transparent",
            bgtext: "white",
          })
        }
      >
        <Stack
          display="flex"
          direction="column"
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                borderRadius: 12,
                border: `1px solid ${buttonColor}`,
                pl: 1,
                pr: 1,
                backgroundColor: bg,
                transition: "0.55s",
              }}
            >
              <Typography
                color={bgtext}
                fontWeight="bold"
                sx={{ transition: "0.55s" }}
              >
                {status}
              </Typography>
            </Box>
            <IconButton
              className="goTo"
              size="small"
              sx={{
                overflow: "hidden",
                backgroundColor: buttonColor ? buttonColor : "white",
                "&:hover": {
                  backgroundColor: buttonColor ? buttonColor : "white",
                },
              }}
            >
              <ArrowForward fontSize="medium" sx={{ ...arrow2 }} />
              <ArrowForward fontSize="medium" sx={{ ...arrow1 }} />
              <ArrowForward fontSize="small" sx={{ opacity: 0 }} />
            </IconButton>
          </Box>

          <Box sx={{ overflow: "hidden", borderRadius: 4 }}>
            <img
              src={src}
              alt={src}
              style={{ boxShadow: `0px 0px 2px 0px ${shadow}` }}
            />
          </Box>

          <Typography className="title">{title}</Typography>
          <Divider sx={{ backgroundColor: "white" }} />
          <Typography className="info">{info.substring(0, 100)}</Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default ProjectCard;
