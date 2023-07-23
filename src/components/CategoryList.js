import React, { useEffect } from 'react';
import {  Typography, Link, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainContainer from '../core/Layout';
import { fetchCategories } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
//   pagination: {
//     margin: '1rem 0',
//     display: 'flex',
//     justifyContent: 'center',
//   },
}));

const CategoryList = (props) => {
    const { categories} = props;
    const navigate = useNavigate();
  

  useEffect(() => {
    props.fetchCategories({ });
  }, []);
  console.log(categories)

  
  return (
    <>
   <Grid container>
    {categories.map((category)=> {
        return(
        <Grid item md={2.4}>

            <Typography>
            <Link onClick={()=> navigate(`/category/${category}`)} > {category} </Link>
            </Typography>




            </Grid>)

    })}

   </Grid>





    </>
  );
};

CategoryList.propTypes = {
fetchCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: (req) => dispatch(fetchCategories(req)),
    

  };
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
