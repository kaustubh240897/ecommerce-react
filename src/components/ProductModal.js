import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Carousel from "../core/Carousel";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  productContent: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    height: "500px",
    width: "100%",
    objectFit: "cover",
  },
}));

export default function ProductModal({ open, handleClose, product }) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Carousel show={1}>
          {product?.images.map((k, id) => (
            <div key={id} className={classes.productContent}>
              <img className={classes.productImage} src={k} alt={id} />
            </div>
          ))}
        </Carousel>
        <Typography className="container" sx={{ margin: "10px 0px 10px 20px" }}>
          <h3>&#8377; {product.price}</h3>
          <h3>{product.title}</h3>
          <h4>{product.category}</h4>
          <p>{product.description}</p>
        </Typography>
      </Dialog>
    </div>
  );
}
