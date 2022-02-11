import React from "react";
import MainContainer from "../core/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import { checkout } from "../redux/actions";
import PropTypes from "prop-types";
//import { tableBodyClasses, Typography } from "@mui/material";
import "../styles/index.css";
import { useNavigate } from "react-router-dom";


const deliveryCost = 50;

const Checkout = (props) => {
  let totalPrice = 0;
  for (let i = 0; i < props.cartData.length; i++) {
    totalPrice = totalPrice + props.cartData[i].price;
  }

  console.log(totalPrice);

  const theme = createTheme();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <h4>Checkout {totalPrice}</h4>
        {props.cartData.map((i) => {
          return (
            <>
              <div className="price-div">
                <div className="price-div-inner">
                  <h5>{i.brand}</h5>
                  <h6>Special Item</h6>
                  <p>Rs. {i.price}</p>
                </div>
                <img src={i.images.small.url} alt={i.brand} />
              </div>
            </>
          );
        })}

        <div className="add-card">
          <span>Payment</span>
          <p>+ Add to cart</p>
        </div>

        <div class="payment-card">
          <h1>Visa</h1>
          <p>**** **** **** **** 3212</p>
          <div className="card-name">
            <p>Card Holder</p>
            <p>Expree</p>
          </div>
          <div className="card-name">
            <p>Kaushtubh Dwivedi</p>
            <p>12/13</p>
          </div>
        </div>

        <div className="total-pay">
          <div className="order">
            <p>Order</p>
            <p>Rs. {totalPrice}</p>
          </div>
          <div className="delivery">
            <p>Delivary</p>
            <p>Rs. {deliveryCost}</p>
          </div>
          <div className="summary">
            <p>Summary</p>
            <p>Rs. {totalPrice + deliveryCost}.00</p>
          </div>
        </div>

        <button onClick={() => { props.checkout(); alert("Checkout successfully."); navigate("/") }}>Pay Now</button>
      </MainContainer>
    </ThemeProvider>
  );
};

Checkout.propTypes = {
  checkout: PropTypes.func.isRequired,
  cartData: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: () => dispatch(checkout()),
  };
};

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
