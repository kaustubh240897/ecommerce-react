import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import ContentContainer from "./InnerLayout";

const useStyles = makeStyles((theme) => ({
  MainContainer: {
    width: "100%",
    minHeight: "100vh",
  },
}));

export default function MainContainer(props) {
  const classes = useStyles();
  return <>{props.children}</>;
}
