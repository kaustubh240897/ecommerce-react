import React, { useEffect } from 'react';
import { Pagination, Typography, Link, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Product from './Product';
import {  updatePage, searchProducts, filterCategory } from '../redux/actions';
import SearchBar from '../core/SearchBar';
import { useLocation, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  pagination: {
    margin: "1rem 0",
    display: "flex",
    justifyContent: "center",
  },
}));

const FilterCategory = (props) => {
    console.log(props);
  const classes = useStyles();
  const { products, total, limit, currentPage } = props;
  const navigate = useNavigate();
  const location = useLocation();
  let categoryName = location.pathname.split("/")

  useEffect(() => {
    props.filterCategory({ categoryName: categoryName[2] ,limit: 10, skip: 0 });
  }, []);

  function handleChangePagination(event, newPage) {
    props.filterCategory({ limit: 10, skip: (newPage - 1) * limit });
    props.updatePage(newPage);
  }

  return (
    <>
        <SearchBar searchProducts={props.searchProducts} />
        <Grid container alignItems="center">
          <Grid item xs={6}>
        <Typography component='h5' variant='h5' className={classes.pagination}>
        Category: {categoryName[2]}
        </Typography>
        </Grid>
        <Grid item xs={6}>
          <Link onClick={()=> navigate('/categories')} >See All Categories...</Link>
        </Grid>
        </Grid>

        <Product products={products} />
        <div className={classes.pagination}>
          {console.log('currentPage', currentPage)}
          {products.length > 0 && total > limit && (
            <Pagination
              count={parseInt(total / limit)}
              shape='rounded'
              page={currentPage}
              onChange={handleChangePagination}
            />
          )}
        </div>
      </>
    
      
   
  );
};

FilterCategory.propTypes = {
  filterCategory: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCategory: (req) => dispatch(filterCategory(req)),
    updatePage: (page) => dispatch(updatePage(page)),
    searchProducts: (req) => dispatch(searchProducts(req)),

  };
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    total: state.total,
    limit: state.limit,
    currentPage: state.currentPage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCategory);
