import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CustomCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardMedia
        component='img'
        height='250'
        image={product?.thumbnail}
        alt='green iguana'
      />
      <CardContent>
        <Grid container justifyContent='space-between'>
          <Typography variant='body1' component='h6'>
            {product?.title}
          </Typography>
        </Grid>
        <Typography gutterBottom variant='body2' color='text.secondary'>
          &#8377; {product?.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
