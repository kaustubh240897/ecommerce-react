import React, { useEffect } from 'react';
import { Typography, Link, Grid, Card } from '@mui/material';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainContainer from '../core/Layout';
import { fetchCategories } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { alignProperty } from '@mui/material/styles/cssUtils';

const useStyles = makeStyles((theme) => ({
    //   pagination: {
    //     margin: '1rem 0',
    //     display: 'flex',
    //     justifyContent: 'center',
    //   },
    productCard: {
        padding: "50px",
        borderRadius: "10px",
        cursor: "pointer",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
        width: '150px',
        marginLeft: "20px"
    },
}));

const CategoryList = (props) => {
    const { categories } = props;
    const navigate = useNavigate();
    const classes = useStyles();




    useEffect(() => {
        props.fetchCategories({});
    }, []);


    return (
        categories.length > 0 ?
            <>
                <h2 style={{ marginTop: "10px" }}><Link onClick={() => navigate('/')} sx={{ marginLeft: "10px" }}  > Home </Link> / Categories</h2>
                <Grid container>
                    {categories.map((category) => {
                        return (
                            <Grid item md={2.4}>

                                <Card onClick={() => navigate(`/category/${category}`)} className={classes.productCard}>
                                    <Typography>
                                        <Link onClick={() => navigate(`/category/${category}`)}> <h3>{category} </h3></Link>
                                    </Typography>
                                </Card>




                            </Grid>)

                    })}

                </Grid>





            </>
            :
            <Typography component='h4' variant='h4' sx={{ display: "flex", justifyContent: "center", marginTop: "25%" }}>Loading...</Typography>
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
