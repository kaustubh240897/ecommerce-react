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
  [theme.breakpoints.down("sm")]: {
    grid: {
      padding: "0 10px",
    },
  },
}));

function Product(props) {
  const classes = useStyles();
  const { products } = props;

  return (
    <Grid container spacing={2} className={classes.grid}>
      {products.map((product) => (
        <Grid key={product.id} item md={2.4} xs={6}>
          <CustomCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Product;
