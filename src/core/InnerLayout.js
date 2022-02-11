import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  ContentContainer: {
    background: "#fff",
    width: "100%",
    paddingTop: 20,
    minHeight: "calc(100vh);",
    padding: "1rem",
    // margin: "auto",
    borderRadius: "1rem",
    [theme.breakpoints.up("md")]: {
      minHeight: "calc(100vh);",
      padding: "10px",
    },
  },
}));

export default function ContentContainer(props) {
  const classes = useStyles();
  return <Paper className={classes.ContentContainer}>{props.children}</Paper>;
}
