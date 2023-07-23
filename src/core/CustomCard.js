import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import ProductModal from "../components/ProductModal";

const useStyles = makeStyles((theme) => ({
  productCard: {
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  productImage: {
    height: "200px",
  },

  cardContent: {
    padding: "1rem 0",
  },

  textMargin: {
    margin: "8px 0",
  },

  titleText: {
    fontWeight: "bold",
    color: "#222",
  },

  textPrice: {
    color: "#4134a3",
  },

  categoryText: {
    textTransform: "capitalize",
    marginTop: "10px",
    fontWeight: "bold",
    color: "#4134a3",
  },
}));

export default function CustomCard({ product }) {
  const navigate = useNavigate();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card onClick={handleClickOpen} className={classes.productCard}>
        <CardMedia
          className={classes.productImage}
          component="img"
          height="250"
          image={product?.thumbnail}
          alt="green iguana"
        />
        <CardContent className={classes.cardContent}>
          <Grid container justifyContent="space-between">
            <Typography
              className={classes.titleText}
              variant="body1"
              component="h6"
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
            >
              {product?.title}
            </Typography>
          </Grid>
          <Typography
            className={classes.categoryText}
            gutterBottom
            variant="body2"
            color="text.secondary"
          >
            {product?.category}
          </Typography>
          <Typography
            className={classes.textMargin}
            gutterBottom
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {product?.description}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            className={classes.textPrice}
          >
            &#8377; {product?.price}
          </Typography>
        </CardContent>
      </Card>
      <ProductModal product={product} open={open} handleClose={handleClose} />
    </>
  );
}
