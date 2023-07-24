import React, { useEffect } from 'react';
import { Pagination, Typography, Link, Grid, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Product from './Product';
import { updatePage, searchProducts, filterCategory } from '../redux/actions';
import SearchBar from '../core/SearchBar';
import { useLocation, useNavigate } from 'react-router-dom';
import CategoryIcon from "@mui/icons-material/Category";

const useStyles = makeStyles((theme) => ({
    grid: {
        width: "100%",
        padding: "0 12rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    innerGrid: {
        width: "100%",
    },

    titleText: {
        margin: "1rem 0",
        color: "#4134a3",
        fontWeight: "bold",
    },
    pagination: {
        margin: "1rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    [theme.breakpoints.down("sm")]: {
        grid: {
            width: "100%",
            padding: "0 1rem",
        },
        innerGrid: {
            width: "100%",
        },
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
        props.filterCategory({ categoryName: categoryName[2], limit: 10, skip: 0 });
    }, []);

    function handleChangePagination(event, newPage) {
        props.filterCategory({ limit: 10, skip: (newPage - 1) * limit });
        props.updatePage(newPage);
    }

    return (
        products.length > 0 ?
            <>
                <Grid container className={classes.grid}>
                    <Grid item className={classes.innerGrid}>
                        <SearchBar searchProducts={props.searchProducts} />
                    </Grid>
                    <Grid item>
                        <Typography component="h5" variant="h5" className={classes.titleText}>
                            <Link onClick={() => navigate('/')} sx={{ marginLeft: "10px" }}  > Home </Link> / Category:{categoryName[2]}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link
                            onClick={() => navigate("/categories")}
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                textDecoration: "none",
                            }}
                        >
                            <Chip
                                style={{ cursor: "pointer" }}
                                icon={<CategoryIcon />}
                                label="All Categories"
                            />
                        </Link>
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
            :
            limit !== 10 ?
              (<Typography
                component="h4"
                variant="h4"
                sx={{ display: "flex", justifyContent: "center", marginTop: "25%" }}
              >
                Sorry There is no product...
              </Typography>)
              :
            <>
                <Typography component='h4' variant='h4' sx={{ display: "flex", justifyContent: "center", marginTop: "25%" }}>Loading...</Typography>
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
