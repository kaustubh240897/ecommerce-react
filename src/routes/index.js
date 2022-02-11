import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "../components/Checkout";
import Landing from "../components/Landing";

const RoutesCom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCom;
