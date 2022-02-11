import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import ContentContainer from "./InnerLayout";

const useStyles = makeStyles((theme) => ({
  MainContainer: {
    width: "100%",
    minHeight: "100vh",
    background: "#e4f1f7",
  },
}));

export default function MainContainer(props) {
  const classes = useStyles();
  return (
    <div className={classes.MainContainer}>
      <Container style={{ minHeight: "100vh" }}>
        <ContentContainer>{props.children}</ContentContainer>
      </Container>
    </div>
  );
}
