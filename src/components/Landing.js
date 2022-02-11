import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import MainContainer from "../core/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCard from "../core/CustomCard";
import { connect } from "react-redux";
import { addProduct, getProducts } from "../redux/actions";
import PropTypes from "prop-types";

const Landing = (props) => {
  const theme = createTheme();

  useEffect(() => {
    props.getProducts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography component="h1" variant="h3">
              Products
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {props.products.map((item) => (
            <Grid item xs={12} sm={6} lg={3} key={item?._id?.$oid}>
              <CustomCard item={item} addToProduct={props.addProduct} />
            </Grid>
          ))}
        </Grid>
      </MainContainer>
    </ThemeProvider>
  );
};

Landing.propTypes = {
  addProduct: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
    getProducts: () => dispatch(getProducts()),
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
