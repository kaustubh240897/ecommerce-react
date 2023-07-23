import React from 'react';
import CustomCard from '../core/CustomCard';
import { Grid } from '@mui/material';

function Product(props) {
  const { products } = props;

  return (
    <Grid container spacing={3} sx={{ mt: 4 }}>
      {products.map((product) => (
        <Grid key={product.id} item md={3}>
          <CustomCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Product;
