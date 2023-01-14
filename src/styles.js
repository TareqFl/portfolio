export const container = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "black",
  overFlow: "hidden",
  gap: 4,
  p: { xs: "4%", sm: "2% 4%", md: "2%", lg: "1% 2%", xl: "1% 16%" },
  "& .socialIcons": {
    // display: { xs: "none", md: "flex" },
    display: "flex",
    "& .iconButton": {
      border: "1px solid white",
    },

    "& .socialIcon": {
      fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
    },
  },

  "& .menu": {
    // display: { xs: "flex", md: "none" },
    display: "none",
    alignItems: "center",
    borderRadius: 50,
    border: "1px solid white",
    height: "100%",
    width: { xs: "30%", sm: "20%" },
    p: 0.5,
    transition: "0.75s",
    transitionDelay: "0.35s",
    "& .menuText": {
      height: "100%",
      width: "100%",
      border: "1px solid white",
      borderRadius: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  "& .TagsContainer": {
    border: "1px solid #3e3e3e",
    pl: 0.7,
    pr: 0.7,
    borderRadius: 5,
    "& .Tags": {
      color: "#3e3e3e",
      textTransform: "uppercase",
      fontSize: "0.9rem",
    },
  },
};

export const paper = {
  border: "1px solid white",
  width: { xs: "80%", sm: "80%", md: "35%" },
  backgroundColor: "transparent",
  borderRadius: 10,
  p: 0.5,
  transition: "0.75s",
  transitionDelay: "0.35s",
  "& .homePage": {
    height: "100%",
    width: "100%",
    border: "1px solid white",
    p: 0.5,
    borderRadius: 50,
    transition: "0.75s",
    transitionDelay: "0.35s",
  },

  "& .homeIconButton": {
    backgroundColor: "white",
    transition: "0.75s",
    transitionDelay: "0.35s",
  },
  "& .homeIcon": {
    color: "black",
    fontSize: { xs: "1rem", md: "1.5rem" },
    transition: "0.75s",
    transitionDelay: "0.35s",
  },
};
