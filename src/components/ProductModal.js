import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Carousel from "../core/Carousel";
import { makeStyles } from "@mui/styles";

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
      </Dialog>
    </div>
  );
}
