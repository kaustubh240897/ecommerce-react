import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CustomCard({ item, addToProduct }) {
  const navigate = useNavigate();
  const handleClick = () => {
    addToProduct(item);
    navigate("checkout");
  };
  return (
    <Card>
      <CardMedia
        component="img"
        height="250"
        image={item?.images?.large?.url}
        alt="green iguana"
      />
      <CardContent>
        <Grid container justifyContent="space-between">
          <Typography variant="body1" component="h6">
            {item?.label}
          </Typography>
          <img
            src={require("../images/cart.png")}
            alt={item.title}
            loading="lazy"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          />
        </Grid>
        <Typography gutterBottom variant="body2" color="text.secondary">
          &#8377; {item?.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
