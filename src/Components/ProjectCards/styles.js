export const container = {
  transition: "0.75s",
  transitionDelay: "0.35s",
  p: 1,
  "& .stack": {
    height: "100%",
    width: "100%",
    p: 2.4,
    borderRadius: 10,
    transition: "0.75s",
    transitionDelay: "0.35s",
  },
  "& .goTo": {
    // transition: "0.75s",
    // transitionDelay: "0.35s",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overFlow: "hidden",
  },

  "& .title": {
    transition: "0.75s",
    transitionDelay: "0.35s",
    color: "white",
    fontWeight: "bold",
  },
  "& .info": { color: "grey", transition: "0.75s", transitionDelay: "0.35s" },
  img: {
    transition: "0.75s",
    width: { xs: "100%" },
  },
  "&:hover": {
    img: {
      transform: "scale(1.2)",
    },
  },
};

export const arrow1 = {
  position: "absolute",
  left: "10%",
  transition: "0.55s",
  color: "black",
};

export const arrow1Hover = {
  position: "absolute",
  left: "120%",
  transition: "0.55s",
  color: "black",
};

export const arrow2 = {
  position: "absolute",
  left: "-120%",
  transition: "0.55s",
  color: "black",
};

export const arrow2Hover = {
  position: "absolute",
  left: "10%",
  transition: "0.55s",
  color: "black",
};
