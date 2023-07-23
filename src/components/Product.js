import React from "react";
import CustomCard from "../core/CustomCard";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "0 12rem",
    display: "flex",
    justifyContent: "center",
  },
  innergrid: {
    padding: "10px",
  },
}));

function Product(props) {
  const classes = useStyles();
  const { products } = props;

  return (
    <Grid container className={classes.grid}>
      {products.map((product) => (
        <Grid key={product.id} className={classes.innergrid} item md={2.4}>
          <CustomCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Product;
